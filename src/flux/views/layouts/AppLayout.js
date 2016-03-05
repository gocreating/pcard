import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this._renderHelmet = ::this._renderHelmet;
    this._renderMenu = ::this._renderMenu;
  }

  getChildContext() {
    const token = localStorage.getItem('token');
    let user = {};
    if (token !== null) {
      user = JSON.parse(localStorage.getItem('user'));
    }
    return {
      isAuth: token !== null,
      token: token,
      user: user,
    };
  }

  _renderHelmet() {
    return (
      <Helmet
        title={this.props.title}
        meta={[
          {charset: 'utf-8'},
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ]}
        link={this.props.styles.map(src =>
          ({ href: src, rel: 'stylesheet' }))}
        script={this.props.scripts.map(src =>
          ({ src: src, type: 'text/javascript' }))} />
    );
  }

  _renderMenu() {
    const {
      isAuth,
      user,
    } = this.getChildContext();

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Pcard</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Link <span className="sr-only">(current)</span></a>
              </li>
              <li>
                <Link to="/profile/new">New Profile</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  { !isAuth && 'User'}
                  { isAuth && (user.name !== ''? user.name: user.email.value)}
                  <span className="caret"></span>
                </a>
                { !isAuth &&
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/user/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/user/register">Register</Link>
                    </li>
                  </ul>}
                { isAuth &&
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/user/logout">Logout</Link>
                    </li>
                  </ul>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div>
        {this._renderHelmet()}
        {this._renderMenu()}
        {this.props.children}
      </div>
    );
  }
};

AppLayout.defaultProps = {
  title: 'Pcard',
  scripts: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
  ],
};

AppLayout.childContextTypes = {
  isAuth: React.PropTypes.bool,
  token: React.PropTypes.string,
  user: React.PropTypes.object,
};