// Exercicio 4 - Desenvolver um algoritmo que retorna o maior número primo entre 0 e 50

let primeNumber = 0;
for (let number = 0; number <= 50; number += 1) {
  let Prime = true;
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      Prime = false;
    }
  }
  if (Prime) {
    primeNumber = number;
  }
}
console.log(primeNumber);