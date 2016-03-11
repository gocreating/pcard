import alt from '../alt';
import apiRequest from '../utils/apiRequest';
import FieldTypes from '../constants/FieldTypes';
import ProfileAction from '../actions/ProfileAction';
import ProfileSchema from '../../server/models/schemas/Profile';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileAction);
    this.state = {
      // define the displaying style and value (ex: fieldType and initialValue) of fields
      fieldDefinitionMap: {
        'identification.name.native': {
          type: FieldTypes.Name,
          label: '本名',
          // value: { first: 'default value' },
        },
        'identification.name.chinese': { type: FieldTypes.Name, label: '中文名' },
        'identification.name.english': { type: FieldTypes.Name, label: '英文名' },
        'identification.email': {
          type: FieldTypes.Email,
          isArray: true,
          label: '信箱',
        },
        'identification.identityNumber': {
          type: FieldTypes.String,
          label: '身分證',
        },
        'identification.passportNumber': {
          type: FieldTypes.String,
          label: '護照號碼',
        },
        'identification.social.facebook': {
          type: FieldTypes.SocialAccount,
          label: 'Facebook資訊',
        },
        'identification.social.twitter': {
          type: FieldTypes.SocialAccount,
          label: 'Twitter資訊',
          options: { isUsernameOnly: true },
        },
        'identification.social.instagram': {
          type: FieldTypes.SocialAccount,
          label: 'Instagram資訊',
          options: { isUsernameOnly: true },
        },
        'identification.social.linkedin': {
          type: FieldTypes.SocialAccount,
          label: 'LinkedIn資訊',
          options: { isUsernameOnly: true },
        },
        'identification.social.github': {
          type: FieldTypes.SocialAccount,
          label: 'Github資訊',
          options: { isUsernameOnly: true },
        },
      },
      // the actual flat profile value
      newProfile: {},
      readProfile: {},
      listSelfProfile: [],
    };
  }

  onListSelf() {
    apiRequest({
      method: 'GET',
      url: `/api/profiles/self`,
      succ: (res) => {
        this.setState({
          listSelfProfile: res.profiles,
        });
      },
      fail: (res) => {
        console.log('list self profile fail');
      },
    });
  }

  onRead(id) {
    apiRequest({
      method: 'GET',
      url: `/api/profile/${id}`,
      succ: (res) => {
        this.setState({
          readProfile: res.profile,
        });
      },
      fail: (res) => {
        console.log('read profile fail');
      },
    });
  }

  onUpdate(newProfileValue) {
    this.setState({
      newProfile: {
        ...this.state.newProfile,
        ...newProfileValue,
      },
    });
    console.log('newProfile', this.state.newProfile);
  }

  onClearNew() {
    this._clearNew();
  }

  _clearNew() {
    this.setState({
      newProfile: {},
    });
  }

  onCreate([newProfile, cb]) {
    if (JSON.stringify(newProfile) === JSON.stringify({})) {
      console.log('nothing should be created');
    } else {
      apiRequest({
        method: 'POST',
        url: '/api/profile',
        data: {
          fields: JSON.stringify(newProfile),
        },
        succ: (res) => {
          cb(res.profile);
        },
        fail: (res) => {
          this._clearNew();
          console.log('create profile fail');
        },
      });
    }
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore');