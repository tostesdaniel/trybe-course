const pool = require('./connection');

const validateUser = (firstName, lastName, email, password) => {
  if (!firstName && typeof firstName !== 'string') return false;
  if (!lastName && typeof lastName !== 'string') return false;
  if (!email && typeof email !== 'string') return false;
  if ((!password && typeof password !== 'string') || password.length < 6)
    return false;

  return true;
};

module.exports = {
  validateUser,
};
