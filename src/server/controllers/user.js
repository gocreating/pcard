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
      if (err || !isPass) {
        return res.json({
          isError: true,
        });
      }
      let userObj = user.toObject();
      let userToken = user.toBearerToken();
      delete userObj.password;
      delete userObj.__v;
      res.cookie('access_token', userToken);
      res.json({
        isError: false,
        data: {
          bearerToken: userToken,
          user: userObj,
        },
      });
    });
  },
  logout: (req, res) => {
    res.clearCookie('access_token');
    res.json({
      isError: false,
    });
  },
};