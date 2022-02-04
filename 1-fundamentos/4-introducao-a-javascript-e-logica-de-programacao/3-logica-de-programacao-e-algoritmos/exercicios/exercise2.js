// Exercicio 2- Criar um algoritmo para inverter as letras de uma palavra

// Solução tirada do gabarito. Quebrei muito a cabeça. 

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);
