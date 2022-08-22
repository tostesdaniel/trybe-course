const validate = require('../validations/login');

module.exports = (req, _res, next) => {
  const { error } = validate.login.validate(req.body);

  if (error) return next(error);
};
