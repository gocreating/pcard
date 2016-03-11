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
  Horoscope: {
    id: 'Enum',
    defaultProps: {
      label: 'Horoscope',
      enum: [
        { label: '未知', value: 'UNKNOWN' },
        { label: '摩羯座(12/22~1/20)', value: 'CAPRICORN' },
        { label: '水瓶座(1/21~2/18)', value: 'AQUARIUS' },
        { label: '雙魚座(2/19~3/20)', value: 'PISCES' },
        { label: '牡羊座(3/21~4/20)', value: 'ARIES' },
        { label: '金牛座(4/21~5/21)', value: 'TAURUS' },
        { label: '雙子座(5/22~6/21)', value: 'GEMINI' },
        { label: '巨蟹座(6/22~7/22)', value: 'CANCER' },
        { label: '獅子座(7/23~8/22)', value: 'LEO' },
        { label: '處女座(8/23~9/22)', value: 'VIRGO' },
        { label: '天秤座(9/23~10/23)', value: 'LIBRA' },
        { label: '天蠍座(10/24~11/22)', value: 'SCORPIO' },
        { label: '射手座(11/23~12/21)', value: 'SAGITTARIUS' },
      ],
      value: {
        value: 'UNKNOWN',
      },
    },
  },
};