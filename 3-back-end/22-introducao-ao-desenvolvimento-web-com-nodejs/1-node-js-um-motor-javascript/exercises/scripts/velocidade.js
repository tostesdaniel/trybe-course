const readlineSync = require('readline-sync');

const calcVelocidadeMedia = (d, t) => {
  const vm = d / t;
  console.log(`Velocidade média: ${vm} m/s`);
};

function main() {
  const distancia = readlineSync.questionInt('Distância (em metros): ');
  const tempo = readlineSync.questionInt('Tempo (em segundos): ');

  calcVelocidadeMedia(distancia, tempo);
}

main();

module.exports = calcVelocidadeMedia;
