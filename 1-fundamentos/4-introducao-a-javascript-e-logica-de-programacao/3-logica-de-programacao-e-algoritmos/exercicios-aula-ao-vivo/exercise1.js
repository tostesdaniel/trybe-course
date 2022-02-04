// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: 'A soma total de 1 a 50 é: '

let sum = 0;

for (let index = 1; index <= 50 ; index += 1) {
  sum += index;
}
console.log('A soma total de 1 a 50 é: ' + sum);