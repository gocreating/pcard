// import mongoose from 'mongoose';
import Profile from '../models/Profile';

export default {
  testCreate: (req, res) => {
    const profile = Profile({
      author: '56d862dfa9268e7814a47fbf',
      identification: {
        name: {
          native: {
            first: '治平',
            last: '翁',
          },
        },
      },
    });
    profile.set({
      'identification.passportNumber': 'test',
    });
    profile.save((err) => {
      if (err) {
        throw err;
      }
      res.send('Profile created!');
    });
  },
  readSchema: (req, res) => {
    // res.json(mongoose.model('Profile').schema.paths);
    res.json(Profile.schema.paths);
  },
};