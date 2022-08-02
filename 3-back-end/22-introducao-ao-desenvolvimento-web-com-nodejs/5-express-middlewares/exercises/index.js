const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { validateName, validateInfo, validateDate } = require('./validationMiddleware');

/* -------------------------------------------------------------------------- */
/* 1 - Crie uma rota POST /sales que receba uma requisição                    */
/*     que envie productName e infos no body da requisição                    */
/* -------------------------------------------------------------------------- */

app.post('/sales', validateName, validateInfo, validateDate, (req, res) => {
  return res
    .status(201)
    .json({ message: 'Sale has been created successfully' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
