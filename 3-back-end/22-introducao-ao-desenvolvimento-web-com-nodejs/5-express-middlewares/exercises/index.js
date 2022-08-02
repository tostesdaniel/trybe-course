const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const {
  validateName,
  validateInfo,
  validateDate,
  validateWarranty,
  validateSignup,
} = require('./validationMiddleware');

/* -------------------------------------------------------------------------- */
/* 1 - Crie uma rota POST /sales que receba uma requisição                    */
/*     que envie productName e infos no body da requisição                    */
/* -------------------------------------------------------------------------- */

app.post(
  '/sales',
  validateName,
  validateInfo,
  validateDate,
  validateWarranty,
  (_req, res) => {
    return res
      .status(201)
      .json({ message: 'Sale has been created successfully' });
  }
);

/* -------------------------------------------------------------------------- */
/* 2 - Crie uma rota POST /signup que receba no body                          */
/*     da requisição email, password, firstName, phone                        */
/* -------------------------------------------------------------------------- */

const crypto = require('crypto');

app.post('/signup', validateSignup, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token: token });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
