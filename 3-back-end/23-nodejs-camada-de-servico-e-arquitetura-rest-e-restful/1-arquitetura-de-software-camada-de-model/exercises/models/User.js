const pool = require('./connection');

const validateUser = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6)
    return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  const query =
    'INSERT INTO model_exercise.users (first_name, last_name, email, password) VALUES (?,?,?,?);';
  return pool
    .execute(query, [firstName, lastName, email, password])
    .then(([{ insertId: id }]) => {
      return { id, firstName, lastName, email };
    });
};

module.exports = {
  validateUser,
  createUser,
};
