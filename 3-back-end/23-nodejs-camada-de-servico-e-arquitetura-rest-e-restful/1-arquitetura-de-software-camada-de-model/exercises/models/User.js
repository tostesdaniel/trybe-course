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

const getUsers = async () => {
  const query =
    'SELECT id, first_name, last_name, email FROM model_exercise.users;';
  const [users] = await pool.execute(query);

  return users;
};

const getUserById = async (id) => {
  const query =
    'SELECT id, first_name, last_name, email FROM model_exercise.users WHERE id = ?;';
  const [user] = await pool.execute(query, [id]);

  return user;
};

module.exports = {
  validateUser,
  createUser,
  getUsers,
  getUserById,
};
