const calcIMC = (peso = 70, altura = 1.72) =>
  console.log(`IMC: ${(peso / altura ** 2).toFixed(2)}`);

calcIMC();

module.exports = calcIMC;
