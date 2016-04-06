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
          props: {
            label: '本名',
          },
        },
        'identification.name.chinese': {
          type: FieldTypes.Name,
          props: {
            label: '中文名',
          },
        },
        'identification.name.english': {
          type: FieldTypes.Name,
          props: {
            label: '英文名',
          },
        },
        'identification.email': {
          type: FieldTypes.Email,
          isArray: true,
          props: {
            label: '信箱',
          },
        },
        'identification.identityNumber': {
          type: FieldTypes.String,
          props: {
            label: '身分證',
          },
        },
        'identification.passportNumber': {
          type: FieldTypes.String,
          props: {
            label: '護照號碼',
          },
        },
        'identification.social.facebook': {
          type: FieldTypes.SocialAccount,
          props: {
            label: 'Facebook資訊',
          },
        },
        'identification.social.twitter': {
          type: FieldTypes.SocialAccount,
          props: {
            label: 'Twitter資訊',
            options: { isUsernameOnly: true },
          },
        },
        'identification.social.instagram': {
          type: FieldTypes.SocialAccount,
          props: {
            label: 'Instagram資訊',
            options: { isUsernameOnly: true },
          },
        },
        'identification.social.linkedin': {
          type: FieldTypes.SocialAccount,
          props: {
            label: 'LinkedIn資訊',
            options: { isUsernameOnly: true },
          },
        },
        'identification.social.github': {
          type: FieldTypes.SocialAccount,
          props: {
            label: 'Github資訊',
            options: { isUsernameOnly: true },
          },
        },
        'basic.relationToAuthor': {
          type: FieldTypes.Unknown,
          props: {
            label: '與我的關係',
          },
        },
        'basic.nickname': {
          type: FieldTypes.String,
          isArray: true,
          props: {
            label: '暱稱',
          },
        },
        'basic.gender': {
          type: FieldTypes.Gender,
          props: {
            label: '性別',
          },
        },
        'basic.horoscope': {
          type: FieldTypes.Horoscope,
          props: {
            label: '星座',
          },
        },
        'basic.chineseHoroscope': {
          type: FieldTypes.ChineseHoroscope,
          props: {
            label: '生肖',
          },
        },
        'basic.bloodType': {
          type: FieldTypes.BloodType,
          props: {
            label: '血型',
          },
        },
        'basic.height': {
          type: FieldTypes.Number,
          props: {
            label: '身高',
            min: 10.0,
            max: 250.0,
            step: 0.1,
            postfix: '公分',
          },
        },
        'basic.weight': {
          type: FieldTypes.Number,
          props: {
            label: '體重',
            min: 0.0,
            max: 250.0,
            step: 0.1,
            postfix: '公斤',
          },
        },
        'basic.phone': {
          type: FieldTypes.String,
          isArray: true,
          props: {
            label: '電話',
          },
        },
        'basic.website': {
          type: FieldTypes.String,
          isArray: true,
          props: {
            label: '個人網站',
          },
        },
        'basic.avatar': {
          type: FieldTypes.Unknown,
          props: {
            label: '大頭貼',
          },
        },
        'basic.language': {
          type: FieldTypes.Language,
          props: {
            label: '語言',
          },
        },
        'basic.religion': {
          type: FieldTypes.String,
          props: {
            label: '宗教信仰',
          },
        },
        'basic.politics': {
          type: FieldTypes.String,
          props: {
            label: '政治立場',
          },
        },
        'basic.loveAptitude': {
          type: FieldTypes.Gender,
          props: {
            label: '戀愛性向',
          },
        },
        'basic.birthday': {
          type: FieldTypes.Datetime,
          props: {
            label: '生日',
          },
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

  onDelete([id, cb]) {
    apiRequest({
      method: 'DELETE',
      url: `/api/profile/${id}`,
      succ: (res) => {
        cb();
      },
      fail: (res) => {
        console.log('delete profile fail');
      },
    });
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore');