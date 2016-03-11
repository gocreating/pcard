import React from 'react';

export default class String extends React.Component {
  componentDidMount() {
    this.refs.value.value = this.props.value;
  }

  getValue() {
    return this.refs.value.value;
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            ref="value"
            className="form-control" />
        </div>
      </div>
    );
  }
};