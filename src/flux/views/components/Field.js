import React from 'react';
import getUid from '../../utils/getUid';
import getComposedValue from '../../utils/getComposedValue';
import FieldTypes from '../../constants/FieldTypes';
import ProfileStore from '../../stores/ProfileStore';
import * as fieldComponents from './fieldComponents';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    try {
      const { fieldDefinitionMap } = ProfileStore.getState();
      const fieldDefinition = fieldDefinitionMap[this.props.path];
      const { type, label, isArray, options } = fieldDefinition;

      let initValue = [];
      if (!fieldDefinition.isArray) {
        initValue = [{
          id: getUid(),
          value:
            getComposedValue(type.defaultValue, fieldDefinition.value),
        },];
      } else {
        if (fieldDefinition.value === undefined ||
            fieldDefinition.value.length === 0) {
          initValue = [{
            id: getUid(),
            value: type.defaultValue,
          },];
        } else {
          initValue = fieldDefinition.value.map((value) =>
            ({
              id: getUid(),
              value: getComposedValue(type.defaultValue, value),
            }));
        }
      }

      this.state = {
        type,
        label,
        isArray,
        initValue,
        currentValue: initValue,
        options,
      };
    } catch (e) {
      console.error(
        `Cannot render \`${this.props.path}\`. See error message:`, e);
      this.state = {
        type: FieldTypes.Unknown,
        label: 'Invalid Path',
        isArray: false,
        initValue: [FieldTypes.Unknown.defaultValue],
        currentValue: [FieldTypes.Unknown.defaultValue],
        options: {},
      };
    }
  }

  /* public methods */

  isDirty() {
    const currentValue = this._getCurrentValue();
    const { initValue } = this.state;
    return JSON.stringify(currentValue) !== JSON.stringify(initValue);
  }

  getValue() {
    const valueArr = this.state.currentValue.map((value, idx) =>
      this.refs[value.id].getValue());
    return this.state.isArray? valueArr: valueArr[0];
  }

  /* private methods */

  _getCurrentValue() {
    return this.state.currentValue.map((cv, idx) => ({
      id: cv.id,
      value: this.refs[cv.id].getValue(),
    }));
  }

  _addSelf(idx) {
    const { initValue } = this.state;
    const v = this._getCurrentValue();

    this.setState({
      currentValue: [
        ...v.slice(0, idx + 1),
        {
          id: getUid(),
          value: this.state.type.defaultValue,
        },
        ...v.slice(idx + 1),
      ],
    });
  }

  _removeSelf(idx) {
    const { initValue } = this.state;
    const v = this._getCurrentValue();

    this.setState({
      currentValue: [
        ...v.slice(0, idx),
        ...v.slice(idx + 1),
      ],
    });
  }

  _renderChildToolbar(idx) {
    return (
      this.state.isArray &&
      <div className="col-sm-1">
        <button
          type="button"
          className="pull-left close"
          onClick={this._addSelf.bind(this, idx)}>
          +
        </button>

        {this.state.isArray && this.state.currentValue.length > 1 &&
          <button
            type="button"
            className="pull-left close"
            aria-hidden="true"
            onClick={this._removeSelf.bind(this, idx)}>
            ×
          </button>}
      </div>
    );
  }

  render() {
    const {
      type,
      label,
      isArray,
      currentValue,
      options,
    } = this.state;
    const FieldComponent = fieldComponents[type.id];

    return (
      <div>
        {currentValue.map((value, idx) =>
          <FieldComponent
            key={value.id}
            ref={value.id}
            label={label}
            isShowLabel={idx === 0}
            value={value.value}
            options={options}
            Toolbar={this._renderChildToolbar(idx)}
            {...this.props} />)}
      </div>
    );
  }
};