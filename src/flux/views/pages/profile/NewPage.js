import React from 'react';
import mongoose from 'mongoose';
import Profile from '../../../../server/models/schemas/Profile';

export default class CreatePage extends React.Component {
  componentDidMount() {
    // var profile = new mongoose.Document({
    //   identification: {
    //     email: ['aa'],
    //   },
    //   basic: {
    //     a: 'zz',
    //     b: 'c',
    //   },
    // }, Profile);

    // profile.validate((err) => {
    //   if (err) {
    //     console.dir(err);
    //   }
    // });
  }

  render() {
    return <div className="container">
      <h1>New Profile</h1>
    </div>;
  }
};