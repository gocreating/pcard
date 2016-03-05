import Profile from '../models/Profile';

export default {
  create: (req, res) => {
    let fields = JSON.parse(req.body.fields);
    let profile = Profile({
      author: '56d862dfa9268e7814a47fbf',
    });
    profile.value = fields;
    profile.save((err) => {
      if (err) {
        return res.json({
          isError: true,
        });
      }
      res.json({
        isError: false,
        profile: profile,
      });
    });
  },
  read: (req, res) => {
    Profile.findById(req.params.id, (err, profile) => {
      if (err) {
        return res.json({
          isError: true,
        });
      }
      res.json({
        isError: false,
        profile: profile,
      });
    });
  },
};