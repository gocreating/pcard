import React from 'react';
import Field from '../../components/Field';
import Fields from '../../components/Fields';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

export default class NewPage extends React.Component {
  static contextTypes = {
    router: React.PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this._handleSubmit = ::this._handleSubmit;
    this.state = {
      // define how to display fields
      fields: [
        'identification.name.native',
        'identification.name.english',
        'identification.email',
        'identification.identityNumber',
        'identification.passportNumber',
        'identification.social.facebook',
        'identification.social.twitter',
        'identification.social.instagram',
        'identification.social.linkedin',
        'identification.social.github',
        'basic.relationToAuthor',
        'basic.nickname',
        'basic.gender',
        'basic.horoscope',
        'basic.chineseHoroscope',
        'basic.bloodType',
        'basic.height',
        'basic.weight',
        'basic.phone',
        'basic.website',
        'basic.avatar',
        'basic.language',
        'basic.religion',
        'basic.politics',
      ],
    };
  }

  componentDidMount() {
    ProfileAction.clearNew();
  }

  _handleSubmit() {
    let newFieldValue = {};
    this.state.fields
      .filter((field) => this.refs[field].isDirty())
      .forEach((field) => {
        newFieldValue[field] = this.refs[field].getValue();
      });
    ProfileAction.update(newFieldValue);
    ProfileAction.create(
      ProfileStore.getState().newProfile,
      (profile) => {
        this.context.router.push(`/profile/${profile._id}`);
      }
    );
  }

  render() {
    return <div className="container">
      <div className="page-header">
        <h1>New Profile</h1>
      </div>
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