export default {
  Unknown: {
    id: 'Unknown',
    defaultProps: {
      label: 'Unknow Field',
    },
  },
  String: {
    id: 'String',
    defaultProps: {
      label: 'String',
      value: '',
    },
  },
  Number: {
    id: 'Number',
  },
  Boolean: {
    id: 'Boolean',
  },
  Name: {
    id: 'Name',
    defaultProps: {
      value: {
        first: '',
        last: '',
      },
    },
  },
  Email: {
    id: 'Email',
    defaultProps: {
      label: 'Email',
      value: {
        value: '',
      },
    },
  },
  SocialAccount: {
    id: 'SocialAccount',
    defaultProps: {
      label: 'Social Info',
      value: {
        id: '',
        username: '',
      },
      options: {
        isUsernameOnly: false,
      },
    },
  },
  Gender: {
    id: 'Enum',
    defaultProps: {
      label: 'Gender',
      enum: [
        { label: '未知', value: 'UNKNOWN' },
        { label: '男', value: 'MALE' },
        { label: '女', value: 'FEMALE' },
      ],
      value: {
        value: 'UNKNOWN',
      },
    },
  },
};