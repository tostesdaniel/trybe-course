const fs = require('fs/promises');

async function getSimpsons() {
  return fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
}

async function createSimpson(content) {
  return await fs.writeFile('./simpsons.json', JSON.stringify(content));
}

module.exports = { getSimpsons, createSimpson };
