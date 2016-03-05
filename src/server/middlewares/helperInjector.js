import ErrorTypes from '../constants/ErrorTypes';

const errorMap = {
  TokenInvalid: {
    name: 'TokenInvalid',
    message: 'You passed an invalid token',
  },
  TokenExpiration: {
    name: 'TokenExpiration',
    message: 'Your token is expired',
  },
  Unauthorized: {
    name: 'Unauthorized',
    message: 'You are not authorized',
  },
};

export default (opts) => {
  return (req, res, next) => {
    res.error = (errorType) => {
      let errorResponse = {
        isError: true,
        errors: [
          errorMap[errorType],
        ],
      };
      res.json(errorResponse);
    };
    next();
  };
};