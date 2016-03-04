import React from 'react';
import apiRequest from '../../../utils/apiRequest';

export default class LogoutPage extends React.Component {
  componentWillMount() {
    apiRequest({
      method: 'GET',
      url: '/api/user/logout',
      succ: (res) => {
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