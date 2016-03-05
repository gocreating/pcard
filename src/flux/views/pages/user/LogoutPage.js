import React from 'react';
import apiRequest from '../../../utils/apiRequest';

export default class LogoutPage extends React.Component {
  componentWillMount() {
    apiRequest({
      method: 'GET',
      url: '/api/user/logout',
      succ: (res) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.context.router.push('/');
      },
      fail: (res) => {
        console.log('logout fail');
      },
    });
  }

  render() {
    return false;
  }
};

LogoutPage.contextTypes = {
  router: React.PropTypes.any.isRequired,
};