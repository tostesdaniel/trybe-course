const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const app = express();
const port = process.env.PORT || 3000;

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  return res.status(200).json(books);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
