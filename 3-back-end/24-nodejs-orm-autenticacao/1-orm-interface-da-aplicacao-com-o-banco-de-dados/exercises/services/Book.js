const { Op } = require('sequelize');
const { Book } = require('../models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll({ order: [['title']] });

    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id);

    return book;
  },
  getByAuthor: async (author) => {
    const books = await Book.findOne({
      where: {
        author: {
          [Op.like]: `%${author}%`,
        },
      },
      order: [['title']],
    });

    return books;
  },
  create: async ({ title, author, pageQuantity, publisher }) => {
    const book = await Book.create({ title, author, pageQuantity, publisher });

    return book;
  },
  update: async (id, { title, author, pageQuantity, publisher }) => {
    const [book] = await Book.update(
      { title, author, pageQuantity, publisher },
      {
        where: {
          id,
        },
      },
    );

    return book;
  },
  delete: async (id) => {
    const book = await Book.destroy({
      where: {
        id,
      },
    });

    return book;
  },
};
