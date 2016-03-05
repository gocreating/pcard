import ErrorTypes from '../constants/ErrorTypes';

export default (req, res, next) => {
  if (req.token !== undefined && req.user !== undefined) {
    next();
  } else {
    res.error(ErrorTypes.Unauthorized);
  }
};