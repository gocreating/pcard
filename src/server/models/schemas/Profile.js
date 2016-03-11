import mongoose from 'mongoose';
import * as Types from '../types';

export default new mongoose.Schema({
  identification: {
    name: {
      native: Types.Name,
      chinese: Types.Name,
      english: Types.Name,
    },
    email: [Types.Email],
    identityNumber: String,
    passportNumber: String,
    social: {
      facebook: Types.SocialAccount,
      twitter: Types.SocialAccount,
      instagram: Types.SocialAccount,
      linkedin: Types.SocialAccount,
      github: Types.SocialAccount,
    },
  },
  basic: {
    relationToAuthor: String,
    nickname: [String],
    gender: Types.Gender,
    horoscope: Types.Horoscope,
  },
});