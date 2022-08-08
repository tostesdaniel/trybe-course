const connection = require('./connection');
const Author = require('./Author');

const getByAuthorId = async (author_id) => {
  const [books] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books WHERE author_id = ${author_id};`
  );
  return books;
};

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );
  return books;
};

const getById = async (id) => {
  const query =
    'SELECT id, title, author_id FROM model_example.books WHERE id = ?;';
  const [book] = await connection.execute(query, [id]);

  if (!book) return null;

  return book[0];
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (
    !authorId ||
    typeof authorId !== 'number' ||
    !(await Author.findById(authorId))
  )
    return false;

  return true;
};

const create = async (title, authorID) => {
  const query =
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?);';
  return connection.execute(query, [title, authorID]);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
};
