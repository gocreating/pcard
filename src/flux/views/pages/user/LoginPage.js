import React from 'react';
import apiRequest from '../../../utils/apiRequest';
import Input from '../../components/Input';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = ::this._handleSubmit;
  }

  _handleSubmit(e) {
    e.preventDefault();
    apiRequest({
      method: 'POST',
      url: '/api/user/login',
      data: {
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue(),
      },
      succ: (res) => {
        if (res.isPass) {
          localStorage.setItem('token', res.data.bearerToken);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          const { location } = this.props;
          if (location.state && location.state.nextPathname) {
            this.context.router.push(location.state.nextPathname);
          } else {
            this.context.router.push('/');
          }
        } else {
          alert('wrong email or password');
        }
      },
      fail: (res) => {
        console.log('login fail');
      },
    });
  }

  render() {
    return <div className="container">
      <div className="page-header">
        <h1>Login</h1>
      </div>

      <form
        className="form-horizontal"
        onSubmit={this._handleSubmit}>

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
            <button type="submit" className="btn btn-default">Login</button>
          </div>
        </div>
      </form>
    </div>;
  }
};

LoginPage.contextTypes = {
  router: React.PropTypes.any.isRequired,
};