/* Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.

    // ─────────────────────────────────────────────────────────────────
    Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
    // ─────────────────────────────────────────────────────────────────
    Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
    // ────────────────────────────────────────────────────────────────────────────────
    Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json. */

// const fs = require('fs/promises');
const fs = require('fs/promises');

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


