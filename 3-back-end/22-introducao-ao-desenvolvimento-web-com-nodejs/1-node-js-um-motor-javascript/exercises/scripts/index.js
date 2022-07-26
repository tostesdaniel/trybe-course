const readlineSync = require('readline-sync');

const queries = [
  'Índice de massa corporal',
  'Adivinhar número',
  'Velocidade média',
];
const scripts = ['imc', 'sorteio', 'velocidade'];

const escolherScript = () => {
  const index = readlineSync.keyInSelect(
    queries,
    'Qual script deseja selecionar?'
  );
  console.log(`O script "${queries[index]}" foi selecionado.`);
  const script = require(`./${scripts[index]}`);
  script();
};

escolherScript();
