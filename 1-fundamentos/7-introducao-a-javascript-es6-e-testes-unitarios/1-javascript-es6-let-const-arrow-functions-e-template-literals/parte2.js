// Exercicio 1 - Criada uma função que recebe um número e retorna seu fatorial, de forma recursiva
const calcFactorial = (n) => n === 1 || n === 0 ? 1 : n * calcFactorial(n - 1);
console.log(calcFactorial(3));

// Exercicio 2 - Criada uma função que recebe uma string e retorna sua maior palavra
