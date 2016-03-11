import React from 'react';

export default class String extends React.Component {
  getValue() {
    return {
      value: this.refs.value.value,
    };
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        <div className="col-sm-3">
          <select
            className="form-control"
            ref="value"
            defaultValue={this.props.value.value}>
            {this.props.enum.map((e) =>
              <option
                key={e.value}
                value={e.value}>
                {e.label}
              </option>)}
          </select>
        </div>
      </div>
    );
  }
};