// Exercicio 1 - Criar um algoritmo que retorne o fatorial de 10.

let myNumber = 10;
let fatorial = myNumber;

for (let i = 1; i < myNumber; i += 1) {
  fatorial *= i;
}

console.log(fatorial);