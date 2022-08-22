const { Book } = require('../models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll();

    return books;
  },
};
