import React from 'react';
import ReactDOM from 'react-dom';

export default class Enum extends React.Component {
  getValue() {
    if (this.props.isMultiple) {
      const node = ReactDOM.findDOMNode(this.refs.value);
      const options = [].slice.call(node.querySelectorAll('option'));
      const selected = options
        .filter((option) => option.selected);
      const selectedValues = selected
        .map((option) => ({
          value: option.value,
        }));
      return selectedValues;
    }
    return {
      value: this.refs.value.value,
    };
  }

  render() {
    let defaultValue;
    if (this.props.isMultiple &&
        this.props.value instanceof Array) {
      defaultValue = this.props.value.map((v) => v.value);
    } else {
      defaultValue = this.props.value;
    }
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        <div className="col-sm-3">
          <select
            className="form-control"
            ref="value"
            multiple={this.props.isMultiple}
            defaultValue={defaultValue}>
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