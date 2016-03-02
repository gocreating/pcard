import Profile from '../models/Profile';

export default {
  add: (req, res) => {
    const newProfile = Profile({
      basic: {
        name: 'Paul',
        email: [
          'gocreating@gmail.com',
          'gocreating.cs01@nctu.edu.tw',
        ],
      },
    });

    newProfile.save((err) => {
      if (err) {
        throw err;
      }
      res.send('Profile created!');
    });
  },
};