const express = require('express');
const pingRouter = require('./routes/pingRouter');
const cepRouter = require('./routes/cepRouter');
const errorMiddleware = require('./middlewares/error');

const app = express();
require('dotenv').config();
const port = 3000;

app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
