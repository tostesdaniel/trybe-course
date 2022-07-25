const readlineSync = require('readline-sync');

const calcIMC = (peso, altura) => peso / (altura / 100) ** 2;

function main() {
  const nome = readlineSync.question('Qual seu nome?');
  const peso = readlineSync.questionInt('Qual seu peso?');
  const altura = readlineSync.questionInt('Qual sua altura em centímetros?');

  const imc = calcIMC(peso, altura).toFixed(2);
  console.log(`${nome}, seu IMC é de ${imc}`);
}

main();

module.exports = calcIMC;
