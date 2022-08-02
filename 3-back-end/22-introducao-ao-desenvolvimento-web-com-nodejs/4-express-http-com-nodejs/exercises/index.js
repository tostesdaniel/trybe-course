const fs = require('fs/promises');

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

/* -------------------------------------------------------------------------- */
/* 6 - Crie um endpoint GET /simpsons                                         */
/* -------------------------------------------------------------------------- */
/* O endpoint deve retornar um array com todos os simpsons ------------------ */

const fs_utils = require('./fs-utils');

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await fs_utils.getSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

/* -------------------------------------------------------------------------- */
/* 7 - Crie um endpoint GET /simpsons/:id                                     */
/* -------------------------------------------------------------------------- */
/* O endpoint deve retornar o personagem com o id informado na URL da requisição */
/* Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found */

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const simpsons = await fs_utils.getSimpsons();
    const simpsonMatch = simpsons.find((simpson) => simpson.id === id);
    if (!simpsonMatch) {
      return res.status(404).json({ message: 'Simpson not found' });
    }
    return res.status(200).json(simpsonMatch);
  } catch (error) {
    return res.status(500).end();
  }
});

/* -------------------------------------------------------------------------- */
/* 8 - Crie um endpoint POST /simpsons                                        */
/* -------------------------------------------------------------------------- */
/* O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } */
/* Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict */
/* Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. */

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  try {
    const simpsons = await fs_utils.getSimpsons();
    const simpsonExists = simpsons.some((simpson) => simpson.id === id);
    if (simpsonExists) {
      return res.status(409).json({ message: 'Simpson already exists' });
    }
    simpsons.push({ id, name });
    await fs_utils.createSimpson(simpsons);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
