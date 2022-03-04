// Exercicio 6 - Criar uma função que receba um número inteiro N e retorne a some de todos os números de 1 a N

function sumOfNums(numeros) {
  total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total += index;
  }
  return total;
}
console.log(sumOfNums(1709));