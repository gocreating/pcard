import React from 'react';
import FieldTypes from '../../../constants/FieldTypes';

export default class Unknown extends React.Component {
  getValue() {
    return FieldTypes.Unknown.defaultValue;
  }

  render() {
    return (
      <div className="form-group has-error">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.path}
            disabled />
        </div>
      </div>
    );
  }
};