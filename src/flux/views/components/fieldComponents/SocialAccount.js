import React from 'react';

export default class SocialAccount extends React.Component {
  getValue() {
    return {
      id: this.refs.id? this.refs.id.value: '',
      username: this.refs.username.value,
    };
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {this.props.label}
        </label>
        {!this.props.options.isUsernameOnly &&
          <div className="col-sm-2">
            <input
              type="text"
              ref="id"
              defaultValue={this.props.value.id}
              className="form-control"
              placeholder="id" />
          </div>}
        <div className="col-sm-2">
          <input
            type="text"
            ref="username"
            defaultValue={this.props.value.username}
            className="form-control"
            placeholder="username" />
        </div>
      </div>
    );
  }
};

SocialAccount.defaultProps = {
  options: {
    isUsernameOnly: false,
  },
};