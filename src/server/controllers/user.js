import User from '../models/User';

export default {
  create: (req, res) => {
    const user = User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.save((err) => {
      if (err) {
        return res.json({
          isError: true,
        });
      }
      res.json({
        isError: false,
      });
    });
  },
  login: (req, res) => {
    const user = User({
      email: req.body.email,
      password: req.body.password,
    });
    user.auth((err, isPass, user) => {
      if (err) {
        return res.json({
          isError: true,
        });
      }
      res.json({
        isError: false,
        isPass: isPass,
        user: user,
      });
    });
  },
};