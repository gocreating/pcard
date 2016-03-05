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
        'identification.identityNumber': {
          type: FieldTypes.String,
          label: '身分證',
        },
      },
      // the actual flat profile value
      profileValue: {},
      currentProfileValue: {},
    };
  }

  onRead(id) {
    apiRequest({
      method: 'GET',
      url: `/api/profile/${id}`,
      succ: (res) => {
        this.setState({
          currentProfileValue: res.profile,
        });
      },
      fail: (res) => {
        console.log('read profile fail');
      },
    });
  }

  onUpdate(newProfileValue) {
    this.setState({
      profileValue: {
        ...this.state.profileValue,
        ...newProfileValue,
      },
    });
    console.log('profileValue', this.state.profileValue);
  }

  onCreate([profileValue, cb]) {
    apiRequest({
      method: 'POST',
      url: '/api/profile',
      data: {
        fields: JSON.stringify(profileValue),
      },
      succ: (res) => {
        cb(res.profile);
      },
      fail: (res) => {
        console.log('create profile fail');
      },
    });
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore');