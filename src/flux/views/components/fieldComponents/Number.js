import React from 'react';

export default class Number extends React.Component {
  getValue() {
    return parseFloat(this.refs.value.value);
  }

  _setValue(value) {
    this.refs.value.value = value;
  }

  _renderInput() {
    return (
      <input
        type="number"
        ref="value"
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.value}
        className="form-control" />
    );
  }

  _renderButtonGroup() {
    const style = {
      cursor: 'pointer',
    };
    return (
      <div className="input-group-btn">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown">
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li>
            <a
              onClick={this._setValue.bind(this, undefined)}
              style={style}>
              清除
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <a
              onClick={this._setValue.bind(this, this.props.min)}
              style={style}>
              設為最小值
            </a>
          </li>
          <li>
            <a
              onClick={this._setValue.bind(this, this.props.max)}
              style={style}>
              設為最大值
            </a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.isShowLabel && this.props.label}
        </label>
        <div className="col-sm-3">
          <div className="input-group">
            {this.props.prefix &&
              <span className="input-group-addon">
                {this.props.prefix}
              </span>}
            {this._renderInput()}
            {this.props.postfix &&
              <span className="input-group-addon">
                {this.props.postfix}
              </span>}
            {this._renderButtonGroup()}
          </div>

        </div>
        {this.props.Toolbar}
      </div>
    );
  }
};