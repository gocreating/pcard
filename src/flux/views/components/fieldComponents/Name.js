import React from 'react';

export default class Name extends React.Component {
  getValue() {
    return {
      first: this.refs.first.value,
      last: this.refs.last.value,
    };
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        <div className="col-sm-2">
          <input
            type="text"
            ref="first"
            defaultValue={this.props.value.first}
            className="form-control"
            placeholder="First" />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            ref="last"
            defaultValue={this.props.value.last}
            className="form-control"
            placeholder="Last" />
        </div>
      </div>
    );
  }
};