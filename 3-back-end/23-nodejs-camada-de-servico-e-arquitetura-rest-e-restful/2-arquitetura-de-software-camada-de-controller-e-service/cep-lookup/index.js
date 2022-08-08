const express = require('express');
const pingRouter = require('./routes/pingRouter');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/ping', pingRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
