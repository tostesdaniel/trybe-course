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

/* -------------------------------------------------------------------------- */
/* 3 - Crie uma rota POST /greetings                                          */
/* -------------------------------------------------------------------------- */
/* Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", 
"age": <idade do usuário> } */
/* Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK */
/* Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized */

app.post('/greetings', (req, res) => {
  const { age, name } = req.body;
  if (age > Number(17))
    return res.status(200).json({ message: `Hello, ${name}!` });
  return res.status(401).json({ message: 'Unauthorized' });
});

/* -------------------------------------------------------------------------- */
/* 4 - Crie uma rota PUT /users/:name/:age                                        */
/* -------------------------------------------------------------------------- */
/* Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } */

app.put('/users/:name/:age', (req, res) => {
  const { age, name } = req.params;
  return res.status(200).json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
