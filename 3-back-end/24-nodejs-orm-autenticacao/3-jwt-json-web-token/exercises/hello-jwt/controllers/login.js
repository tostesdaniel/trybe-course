const jwt = require('jsonwebtoken');
const validate = require('../validations/login');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { username } = req.body;

  const { error } = validate.login.validate(req.body);

  if (error) return next(error);

  const payload = {
    username,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};
