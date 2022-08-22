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
};
