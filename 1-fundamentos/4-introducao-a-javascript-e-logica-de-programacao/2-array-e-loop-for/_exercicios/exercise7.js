let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 7 - Utilizando o for, descobrir qual o menor número do array e imprimí-lo

let shortestNumber = numbers[0];
for (const number of numbers) {
  if (number < shortestNumber) {
    shortestNumber = number;
  }
}
console.log(shortestNumber);