const jwt = require('jsonwebtoken');
const validate = require('../validations/login');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validate.login.validate(req.body);

  if (error) return next(error);

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};
