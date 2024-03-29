// Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.

// const fs = require('fs/promises');
const fs = require('fs/promises');

// ─── Helper Function To Read From File ──────────────────────────────────────────

async function readFile(filepath) {
  return JSON.parse(await fs.readFile(filepath, 'utf8'));
}

// ─── Helper Function To Write To File ───────────────────────────────────────────

async function writeFile(filepath, content) {
  return await fs.writeFile(filepath, JSON.stringify(content));
}

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

function printCharacters() {
  try {
    const data = fs.readFileSync('./simpsons.json', 'utf8');
    const characters = JSON.parse(data).map(
      ({ id, name }) => `${id} - ${name}`
    );
    characters.forEach((character) => console.log(character));
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

// printCharacters();

// ────────────────────────────────────────────────────────────────────────────────
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getCharacter(id) {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const characters = await JSON.parse(data);
  const selCharacter = characters.find(
    (character) => Number(character.id) === id
  );
  if (!selCharacter) {
    console.log('Id não encontrado');
    return;
  }
  console.log(selCharacter);
}

// ─── Get Bart Simpson Information ───────────────────────────────────────────────
// getCharacter(3);
// getCharacter(0);

// ────────────────────────────────────────────────────────────────────────────────
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function removeCharacters(c1, c2) {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  const characters = JSON.parse(data);
  const filteredCharacters = JSON.stringify(
    characters.filter(({ id }) => Number(id) !== c1 && Number(id) !== c2)
  );
  await fs.writeFile('./simpsons.json', filteredCharacters);
}

// removeCharacters(6, 10);

// ─────────────────────────────────────────────────────────────────
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function writeSimpsonFamily() {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  const simpsonFamily = JSON.parse(data).slice(0, 4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
}

// writeSimpsonFamily();

// ─────────────────────────────────────────────────────────────────
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function addCharacterToSimpsonFamily(characterName) {
  const simpsonFamily = await readFile('./simpsonFamily.json');
  const characters = await readFile('./simpsons.json');
  const newCharacter = characters.find(({ name }) => name === characterName);
  const newSimpsonFamily = simpsonFamily.concat(newCharacter);
  return writeFile('./simpsonFamily.json', newSimpsonFamily);
}

// addCharacterToSimpsonFamily('Nelson Muntz');

// ────────────────────────────────────────────────────────────────────────────────
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function replaceCharacter(character, replacement) {
  const simpsonFamily = await readFile('./simpsonFamily.json');
  const characters = await readFile('./simpsons.json');
  const replacementCharacter = characters.find(
    ({ name }) => name === replacement
  );
  const newSimpsonFamily = simpsonFamily.map(({ name }, i) => {
    return name === character ? replacementCharacter : simpsonFamily[i];
  });
  console.log(newSimpsonFamily);
  return await writeFile('./simpsonFamily.json', newSimpsonFamily);
}

replaceCharacter('Nelson Muntz', 'Maggie Simpson');
