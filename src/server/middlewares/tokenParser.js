import jwt from 'jwt-simple';
import moment from 'moment';
import bearerTokenConfig from '../credentials/bearerToken';
import ErrorTypes from '../constants/ErrorTypes';

/**
 * Mount `req.token` and `req.user`
 */
export default (opts) => {
  if (!opts) {
    opts = {};
  }
  const cookieKey = opts.cookieKey || 'access_token';
  const queryKey  = opts.queryKey  || 'access_token';
  const bodyKey   = opts.bodyKey   || 'access_token';
  const headerKey = opts.headerKey || 'Bearer';

  return (req, res, next) => {
    let bearerToken;

    // extract token from cookie
    if (req.cookies && req.cookies[cookieKey]) {
      bearerToken = req.cookies[cookieKey];

    // extract token from header
    } else if (req.headers && req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');
      if (parts.length === 2 && parts[0] === headerKey) {
        bearerToken = parts[1];
      } else {
        res.error(ErrorTypes.TokenInvalid);
      }

    // extract token from query parameter
    } else if (req.query && req.query[queryKey]) {
      bearerToken = req.query[queryKey];

    // extract token from form value
    } else if (req.body && req.body[bodyKey]) {
      bearerToken = req.body[bodyKey];
    }

    // token exist, parse it
    if (bearerToken) {
      let decoded = {};

      // well-formed token
      try {
        decoded = jwt.decode(
          bearerToken,
          bearerTokenConfig.secret
        );
      // malformed token
      } catch (err) {
        res.error(ErrorTypes.TokenInvalid);
      }

      // token expired
      if (decoded.expiration <= Date.now()) {
        res.error(ErrorTypes.TokenExpiration);

      // token does not expire
      } else {
        req.token = bearerToken;
        req.user = decoded.user;
        next();
      }

    // token does not exist, pass through it
    } else {
      next();
    }
  };
};