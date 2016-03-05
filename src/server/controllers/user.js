import User from '../models/User';
import error, { Types } from '../utils/error';

export default {
  create: (req, res) => {
    const user = User({
      name: req.body.name,
      email: {
        value: req.body.email,
      },
      password: req.body.password,
    });
    user.save(error(Types.Db, res, () => {
      res.json({
        isError: false,
      });
    }));
  },
  login: (req, res) => {
    const user = User({
      email: {
        value: req.body.email,
      },
      password: req.body.password,
    });
    user.auth(error(Types.Db, res, (isPass, user) => {
      if (!isPass) {
        res.json({
          isError: false,
          isPass: false,
        });
      } else {
        let userObj = user.toObject();
        let userToken = user.toBearerToken();
        delete userObj.password;
        delete userObj.__v;
        res.cookie('access_token', userToken);
        res.json({
          isError: false,
          isPass: true,
          data: {
            bearerToken: userToken,
            user: userObj,
          },
        });
      }
    }));
  },
  logout: (req, res) => {
    res.clearCookie('access_token');
    res.json({
      isError: false,
    });
  },
};