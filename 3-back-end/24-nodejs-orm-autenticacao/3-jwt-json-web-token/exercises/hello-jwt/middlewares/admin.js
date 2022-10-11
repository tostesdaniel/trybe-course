module.exports = (req, res, next) => {
  const { user } = req;

  if (!user.admin) {
    const error = new Error('Restricted access');
    error.statusCode = 403;
    return next(error);
  }

  return next();
};
