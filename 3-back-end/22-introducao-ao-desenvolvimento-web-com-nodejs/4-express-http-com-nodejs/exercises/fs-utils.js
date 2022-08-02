const fs = require('fs/promises');

async function getSimpsons() {
  return fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
}

module.exports = getSimpsons;
