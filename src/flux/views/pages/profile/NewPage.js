import React from 'react';
import mongoose from 'mongoose';
import Field from '../../components/Field';
import Fields from '../../components/Fields';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

@connectToStores
export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = ::this._handleSubmit;
    this.state = {
      // define how to display fields
      fields: [
        'identification.name.native',
        'identification.name.english',
        'identification.identityNumber',
      ],
    };
  }

  static getStores() {
    return [ProfileStore];
  }

  static getPropsFromStores() {
    return ProfileStore.getState();
  }

  _handleSubmit() {
    let newFieldValue = {};
    this.state.fields
      .filter((field) => this.refs[field].isDirty())
      .forEach((field) => {
        newFieldValue[field] = this.refs[field].getValue();
      });
    ProfileAction.update(newFieldValue);
    ProfileAction.create();
  }

  render() {
    return <div className="container">
      <h1>New Profile</h1>
      <Fields>
        {this.state.fields.map((field, idx) =>
          <Field
            key={idx}
            ref={field}
            path={field} />
        )}

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              onClick={this._handleSubmit}
              className="btn btn-default">
              送出
            </button>
          </div>
        </div>
      </Fields>
    </div>;
  }
};