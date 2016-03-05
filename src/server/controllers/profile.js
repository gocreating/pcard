import Profile from '../models/Profile';
import error, { Types } from '../utils/error';

export default {
  create: (req, res) => {
    let fields = JSON.parse(req.body.fields);
    let profile = Profile({
      author: req.user._id,
      value: fields,
    });
    profile.save(
      error(Types.Db, res, () => {
        res.json({
          isError: false,
          profile: profile,
        });
      })
    );
  },
  read: (req, res) => {
    Profile.findById(
      req.params.id,
      error(Types.Db, res, (profile) => {
        res.json({
          isError: false,
          profile: profile,
        });
      })
    );
  },
};