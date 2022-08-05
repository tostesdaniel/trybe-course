const connection = require('./connection');

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

module.exports = {
  getAll,
  getByAuthorId,
};
