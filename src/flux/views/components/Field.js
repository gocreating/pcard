import React from 'react';
import objectAssign from 'object-assign';
import FieldTypes from '../../constants/FieldTypes';
import ProfileStore from '../../stores/ProfileStore';
import * as fieldComponents from './fieldComponents';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    try {
      const { fieldDefinitionMap } = ProfileStore.getState();
      const fieldDefinition = fieldDefinitionMap[this.props.path];
      const { type, label, isArray } = fieldDefinition;

      let initValue = [];
      if (!fieldDefinition.isArray) {
        initValue = [
          this._getComposedValue(type.defaultValue, fieldDefinition.value),
        ];
      } else {
        initValue = fieldDefinition.value.map((value) =>
          this._getComposedValue(type.defaultValue, value));
      }

      this.state = {
        type,
        label,
        isArray,
        initValue,
      };
    } catch (e) {
      this.state = {
        type: FieldTypes.Unknown,
        label: 'Invalid Path',
        isArray: false,
        initValue: [FieldTypes.Unknown.defaultValue],
      };
    }
  }

  _getComposedValue(defaultValue, assignValue) {
    let value;
    if (defaultValue instanceof Object) {
      // object
      value = objectAssign({},
        defaultValue,
        assignValue);
    } else {
      // string
      value = assignValue || defaultValue;
    }
    return value;
  }

  getValue() {
    const valueArr = this.state.initValue.map((value, idx) =>
      this.refs[`fieldComponent${idx}`].getValue());
    return this.state.isArray? valueArr: valueArr[0];
  }

  getInitValue() {
    const valueArr = this.state.initValue;
    return this.state.isArray? valueArr: valueArr[0];
  }

  isDirty() {
    const currentValue = this.getValue();
    const initValue = this.getInitValue();
    return JSON.stringify({v: currentValue}) !== JSON.stringify({v: initValue});
  }

  render() {
    const {
      type,
      label,
      isArray,
      initValue,
    } = this.state;

    const FieldComponent = fieldComponents[type.id];

    return (
      <div>
        {initValue.map((value, idx) =>
          <FieldComponent
            key={idx}
            ref={`fieldComponent${idx}`}
            label={label}
            isShowLabel={idx === 0}
            value={value}
            {...this.props} />)}
      </div>
    );
  }
};