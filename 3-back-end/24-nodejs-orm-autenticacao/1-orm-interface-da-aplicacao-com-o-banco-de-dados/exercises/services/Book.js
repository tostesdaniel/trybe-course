const { Book } = require('../models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll();

    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id);

    return book;
  },
};
