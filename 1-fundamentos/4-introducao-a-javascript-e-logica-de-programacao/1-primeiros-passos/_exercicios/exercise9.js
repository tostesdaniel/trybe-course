// Exercicio 8 - Um programa com três constantes que retorna 'true' se pelo menos uma for ímpar. Caso contrário, 'false'

const one = 21;
const two = 23;
const three = 1;

if (one % 2 === 1 || two % 2 === 1 || three % 2 === 1) {
  console.log(true);
}

else {
  console.log(false);
}