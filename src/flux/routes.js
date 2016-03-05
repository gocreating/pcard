import React from 'react';
import { Route, IndexRoute } from 'react-router';

import loginRequired from './utils/loginRequired';
import AppLayout from './views/layouts/AppLayout';
import HomePage from './views/pages/HomePage';
import RegisterPage from './views/pages/user/RegisterPage';
import LoginPage from './views/pages/user/LoginPage';
import LogoutPage from './views/pages/user/LogoutPage';
import ProfileShowPage from './views/pages/profile/ShowPage';
import ProfileNewPage from './views/pages/profile/NewPage';
import NotFoundPage from './views/pages/NotFoundPage';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage} />
    <Route path="user/register" component={RegisterPage} />
    <Route path="user/login" component={LoginPage} />
    <Route path="user/logout" component={LogoutPage} />
    <Route
      path="profile/new"
      component={ProfileNewPage}
      onEnter={loginRequired} />
    <Route path="profile/:id" component={ProfileShowPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);