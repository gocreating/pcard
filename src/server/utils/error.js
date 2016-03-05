// error types
export const Types = {
  Db: 'Db',
};

export default (errorType, res, next) => {
  return (err, ...result) => {
    if (err) {
      let errorResponse = {
        isError: true,
        errors: [],
      };
      console.log('====================');
      if (errorType === Types.Db) {
        if (err.errors !== undefined) {
          errorResponse.errors.concat(err.errors);
        } else {
          errorResponse.errors.push(err);
        }
      }
      return res.json(errorResponse);
    }
    next(...result);
  };
};