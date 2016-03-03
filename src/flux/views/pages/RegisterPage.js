import React from 'react';
import apiRequest from '../../utils/apiRequest';
import Input from '../components/Input';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = ::this._handleSubmit;
  }

  _handleSubmit(e) {
    e.preventDefault();
    apiRequest({
      method: 'POST',
      url: '/api/user',
      data: {
        name: this.refs.name.getValue(),
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue(),
      },
      succ: (res) => {
        location.href = '/user/login';
      },
      fail: (res) => {
        console.log('register fail');
      },
    });
  }

  render() {
    return <div className="container">
      <div className="page-header">
        <h1>Register</h1>
      </div>

      <form
        className="form-horizontal"
        onSubmit={this._handleSubmit}>

        <Input
          ref="name"
          label="Name"
          placeholder="name" />

        <Input
          ref="email"
          label="Email"
          placeholder="email" />

        <Input
          ref="password"
          label="Password"
          type="password"
          placeholder="password" />

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Register</button>
          </div>
        </div>
      </form>
    </div>;
  }
};