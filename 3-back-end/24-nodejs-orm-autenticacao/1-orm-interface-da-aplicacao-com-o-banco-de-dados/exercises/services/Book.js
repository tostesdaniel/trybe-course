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
  create: async ({ title, author, pageQuantity }) => {
    const book = await Book.create({ title, author, pageQuantity });

    return book;
  },
  update: async (id, { title, author, pageQuantity }) => {
    const [book] = await Book.update(
      { title, author, pageQuantity },
      {
        where: {
          id,
        },
      },
    );

    return book;
  },
};
