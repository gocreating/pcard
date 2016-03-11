import React from 'react';
import getUid from '../../utils/getUid';
import getComposedValue from '../../utils/getComposedValue';
import _ from 'lodash';
import FieldTypes from '../../constants/FieldTypes';
import ProfileStore from '../../stores/ProfileStore';
import * as fieldComponents from './fieldComponents';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    try {
      const { fieldDefinitionMap } = ProfileStore.getState();
      const fieldDefinition = fieldDefinitionMap[this.props.path];
      const { type, isArray, props } = fieldDefinition;

      let initValueArr = [];
      if (!fieldDefinition.isArray) {
        initValueArr = [{
          id: getUid(),
          props:
            _.merge({}, type.defaultProps, props),
        },];
      } else {
        if (props === undefined ||
            props.value === undefined ||
            props.value === []) {
          initValueArr = [{
            id: getUid(),
            props: type.defaultProps,
          },];
        } else {
          initValueArr = props.value.map((value) =>
            ({
              id: getUid(),
              props: {
                ..._.merge({}, type.defaultProps, props),
                value: _.merge({}, type.defaultProps.value, value),
              },
            }));
        }
      }

      this.state = {
        type,
        isArray,
        props,
        initValueArr,
        currentValueArr: initValueArr,
      };
    } catch (e) {
      console.error(
        `Cannot render \`${this.props.path}\`. See error message:`, e);
      const valueArr = [{
        id: getUid(),
        props: FieldTypes.Unknown.defaultProps,
      },];
      this.state = {
        type: FieldTypes.Unknown,
        isArray: false,
        props: FieldTypes.Unknown.defaultProps,
        initValueArr: valueArr,
        currentValueArr: valueArr,
      };
    }
  }

  /* public methods */

  isDirty() {
    const currentValue = this._getCurrentValue()
      .map((cv) => cv.props.value);
    const initValue = this.state.initValueArr
      .map((iv) => iv.props.value);
    return JSON.stringify(currentValue) !== JSON.stringify(initValue);
  }

  getValue() {
    const valueArr = this.state.currentValueArr.map((cv, idx) =>
      this.refs[cv.id].getValue());
    return this.state.isArray? valueArr: valueArr[0];
  }

  /* private methods */

  _getCurrentValue() {
    return this.state.currentValueArr.map((cv, idx) =>
      _.merge({}, cv, {
        props: {
          value: this.refs[cv.id].getValue(),
        },
      }));
  }

  _addSelf(idx) {
    const v = this._getCurrentValue();
    const { type, props } = this.state;
    this.setState({
      currentValueArr: [
        ...v.slice(0, idx + 1),
        {
          id: getUid(),
          props: {
            ..._.merge({}, type.defaultProps, props),
            value: type.defaultProps.value,
          },
        },
        ...v.slice(idx + 1),
      ],
    });
  }

  _removeSelf(idx) {
    const v = this._getCurrentValue();
    this.setState({
      currentValueArr: [
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

        {this.state.isArray && this.state.currentValueArr.length > 1 &&
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
      isArray,
      currentValueArr,
    } = this.state;
    const FieldComponent = fieldComponents[type.id];

    return (
      <div>
        {currentValueArr.map((currentValue, idx) =>
          <FieldComponent
            key={currentValue.id}
            ref={currentValue.id}
            Toolbar={this._renderChildToolbar(idx)}
            path={this.props.path}
            isShowLabel={idx === 0}
            {...currentValue.props} />)}
      </div>
    );
  }
};