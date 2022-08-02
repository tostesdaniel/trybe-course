const express = require('express');
const app = express();
const port = 3000;

/* -------------------------------------------------------------------------- */
/*                         1 - Crie uma rota GET /ping                        */
/* -------------------------------------------------------------------------- */
/* Sua rota deve retornar o seguinte JSON: { message: 'pong' } -------------- */

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
