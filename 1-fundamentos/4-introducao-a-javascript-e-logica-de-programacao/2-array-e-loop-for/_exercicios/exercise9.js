let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25,
];

// Exercicio 9 - Utilize o array do exercicio 8, divida cada elemento por dois, e então imprima o resultado.

let dividedByTwo = [];
for (const number of numbers) {
  dividedByTwo.push(number / 2);
}
console.log(dividedByTwo);