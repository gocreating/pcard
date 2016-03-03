import mongoose from 'mongoose';
import { isEmail } from 'validator';
import Email from './schemas/Email';

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
      user = user.toObject();
      delete user.password;
      cb(null, !!user, user);
    });
};

export default mongoose.model('User', User);