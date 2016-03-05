import React from 'react';
import apiRequest from '../../../utils/apiRequest';

export default class LogoutPage extends React.Component {
  componentWillMount() {
    apiRequest({
      method: 'GET',
      url: '/api/user/logout',
      succ: (res) => {
        localStorage.removeItem('token');
        location.href = '/';
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