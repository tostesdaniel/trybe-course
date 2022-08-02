const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

/* -------------------------------------------------------------------------- */
/* 1 - Crie uma rota GET /ping                                                */
/* -------------------------------------------------------------------------- */
/* Sua rota deve retornar o seguinte JSON: { message: 'pong' } -------------- */

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

/* -------------------------------------------------------------------------- */
/* 2 - Crie uma rota POST /hello                                              */
/* -------------------------------------------------------------------------- */
/* Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" } */
/* Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }. */

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
