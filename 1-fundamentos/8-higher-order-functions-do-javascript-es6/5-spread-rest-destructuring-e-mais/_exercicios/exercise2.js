// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number);

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
