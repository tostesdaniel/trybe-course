// Exercicio 1 - Criada uma função que recebe um número e retorna seu fatorial, de forma recursiva
const calcFactorial = (n) => n === 1 || n === 0 ? 1 : n * calcFactorial(n - 1);
console.log(calcFactorial(4));

// Exercicio 2 - Criada uma função que recebe uma string e retorna sua maior palavra
const findLongestWord = phrase => {
  let wordsArray = phrase.split(' ');
  let longestWordLength = 0;
  let longestWord = '';

  for (const word of wordsArray) {
    if (word.length > longestWordLength) {
      longestWordLength = word.lenght;
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('JavaScript é legal mas as vezes pode ser complicado'));
