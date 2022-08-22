const Book = require('../services/Book');

module.exports = {
  getAll: async (_req, res) => {
    const books = await Book.getAll();

    return res.status(200).json(books);
  },
};
