let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 3 - Calcular e imprimir a média dos valores do array

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let media = sum / numbers.length;

console.log(media);
