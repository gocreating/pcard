import React from 'react';
import mongoose from 'mongoose';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

@connectToStores
export default class CreatePage extends React.Component {
  static getStores() {
    return [ProfileStore];
  }

  static getPropsFromStores() {
    return ProfileStore.getState();
  }

  _handleClick() {
    ProfileAction.test();
  }

  render() {
    return <div className="container">
      <h1>New Profile</h1>
      <button onClick={this._handleClick}>
        Click me
      </button>
      <p>{this.props.test}</p>
    </div>;
  }
};