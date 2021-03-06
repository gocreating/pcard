import React from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {
  getValue() {
    return this.refs.input.value;
  }

  componentDidMount() {
    this.refs.input.value = this.props.value;
  }

  render() {
    const labelClass = classNames(
      this.props.labelClassName,
      'control-label'
    );
    const inputClass = classNames(
      this.props.inputClassName
    );

    return (
      <div className="form-group">
        <label className={labelClass}>
          {this.props.label}
        </label>

        <div className={inputClass}>
          <input
            ref="input"
            type={this.props.type}
            className="form-control"
            placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
};

Input.propTypes = {
  type: React.PropTypes.oneOf([
    'text',
    'email',
    'password',
    'textarea',
    'checkbox',
  ]),
  label: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.any,
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  value: '',
  labelClassName: 'col-sm-2',
  inputClassName: 'col-sm-10',
};