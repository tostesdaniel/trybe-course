const Book = require('../services/Book');

module.exports = {
  getAll: async (_req, res) => {
    const books = await Book.getAll();

    return res.status(200).json(books);
  },
  getById: async (req, res) => {
    const { id } = req.params;

    const book = await Book.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  },
  create: async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    res.status(201).json(book);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const book = await Book.update(id, { title, author, pageQuantity });

    if (!book) return res.status(404).json({ message: 'Book not found!' });

    return res.status(200).json({ message: 'Book updated!' });
  },
};
