const readlineSync = require('readline-sync');

const sorteio = () => {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber(0, 10);
};

function main() {
  const palpite = readlineSync.questionInt(
    'Tente adivinhar um número de 0 a 10: '
  );
  const numero = sorteio();
  if (numero === palpite) {
    console.log('Parabéns, número correto!');
  }
  console.log(`Não foi dessa vez. O número sorteado era ${numero}`);
}

main();

module.exports = sorteio;
