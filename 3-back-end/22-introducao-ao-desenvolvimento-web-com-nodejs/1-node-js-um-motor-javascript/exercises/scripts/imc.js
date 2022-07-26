const readlineSync = require('readline-sync');

const calcIMC = (peso, altura) => peso / (altura / 100) ** 2;

function main() {
  const nome = readlineSync.question('Qual seu nome?');
  const peso = readlineSync.questionFloat('Qual seu peso?');
  const altura = readlineSync.questionInt('Qual sua altura em centímetros?');

  const imc = calcIMC(peso, altura).toFixed(2);

  const CalcClassificacao = () => {
    let classificacao;
    if (imc < 18.5) {
      return (classificacao = 'abaixo do peso');
    }

    if (imc >= 18.5 && imc < 25) {
      return (classificacao = 'peso normal');
    }

    if (imc >= 25 && imc < 30) {
      return (classificacao = 'acima do peso');
    }

    if (imc >= 30 && imc < 35) {
      return (classificacao = 'obesidade grau I');
    }

    if (imc >= 35 && imc < 40) {
      return (classificacao = 'obesidade grau II');
    }

    return (classificacao = 'obesidade graus III e IV');
  };
  console.log(
    `${nome}, seu IMC é de ${imc}`,
    `Sua classificação é: ${CalcClassificacao()}`
  );
}

main();

module.exports = calcIMC;
