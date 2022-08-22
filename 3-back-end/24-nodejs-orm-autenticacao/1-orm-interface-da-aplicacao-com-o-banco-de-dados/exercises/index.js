const express = require('express');

const app = express();
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
