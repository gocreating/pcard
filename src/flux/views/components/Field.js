import React from 'react';
import ProfileStore from '../../stores/ProfileStore';
import * as fieldComponents from './fieldComponents';

export default class Field extends React.Component {
  _getInfo() {
    const { fieldDefinitionMap } = ProfileStore.getState();
    const fieldDefinition = fieldDefinitionMap[this.props.path];
    const { type, label } = fieldDefinition;

    let initValue;
    if (type.defaultValue instanceof Object) {
      initValue = Object.assign({},
        type.defaultValue,
        fieldDefinition.value);
    } else {
      initValue = fieldDefinition.value || type.defaultValue;
    }

    return {
      type: type,
      label: label,
      initValue: initValue,
    };
  }

  getValue() {
    return this.refs.fieldComponent.getValue();
  }

  isDirty() {
    const currentValue = this.getValue();
    const {
      type,
      label,
      initValue,
    } = this._getInfo();

    // use stringigy to implement deep equal comparison
    return JSON.stringify({v: currentValue}) !== JSON.stringify({v: initValue});
  }

  render() {
    const {
      type,
      label,
      initValue,
    } = this._getInfo();

    const FieldComponent = fieldComponents[type.id];

    return (
      <FieldComponent
        ref="fieldComponent"
        label={label}
        value={initValue}
        {...this.props} />
    );
  }
};