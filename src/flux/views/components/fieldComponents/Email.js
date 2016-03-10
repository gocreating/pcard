import React from 'react';

export default class Email extends React.Component {
  getValue() {
    return {
      value: this.refs.value.value,
    };
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.isShowLabel && this.props.label}
        </label>
        <div className="col-sm-4">
          <input
            type="email"
            ref="value"
            defaultValue={this.props.value.value}
            className="form-control"
            placeholder="somebody@domain.any" />
        </div>
        {this.props.Toolbar}
      </div>
    );
  }
};