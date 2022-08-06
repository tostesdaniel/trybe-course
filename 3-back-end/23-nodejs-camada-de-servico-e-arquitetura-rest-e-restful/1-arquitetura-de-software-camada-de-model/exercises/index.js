const express = require('express');
const User = require('./models/User');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/user', async (_req, res) => {
  const users = await User.getUsers();

  if (Array.isArray(users) && !users.length) return res.status(404).json([]);

  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User not Found' });

  return res.status(200).json(user);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.validateUser(firstName, lastName, email, password))
    return res.status(400).json({
      message: 'password length must be at least 6 characters long',
    });

  const user = await User.createUser(firstName, lastName, email, password);

  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
