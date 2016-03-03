import mongoose from 'mongoose';
import jwt from 'jwt-simple';
import moment from 'moment';
import { isEmail } from 'validator';
import Email from './schemas/Email';
import bearerToken from '../credentials/bearerToken';

const encodePassword = (rawPassword) => {
  const crypto = require('crypto');
  let recursiveLevel = 5;
  while (recursiveLevel) {
    rawPassword = crypto
      .createHash('md5')
      .update(rawPassword)
      .digest('hex');
    recursiveLevel -= 1;
  }
  return rawPassword;
};

let User = new mongoose.Schema({
  name: { type: String, required: true },
  email: Email,
  password: {
    type: String,
    required: true,
    set: encodePassword,
  },
});

User.methods.auth = function(cb) {
  return this
    .model('User')
    .findOne({
      email: this.email,
      password: this.password,
    }, (err, user) => {
      if (err) {
        cb(err);
      }
      cb(null, !!user, user);
    });
};

User.methods.toBearerToken = function(cb) {
  const token = jwt.encode({
    user: {
      id: this._id,
      name: this.name,
      email: this.email,
    },
    expiration: moment()
      .add(
        bearerToken.expiration.split(' ')[0],
        bearerToken.expiration.split(' ')[1])
      .valueOf(),
  }, bearerToken.secret);

  return token;
};

export default mongoose.model('User', User);