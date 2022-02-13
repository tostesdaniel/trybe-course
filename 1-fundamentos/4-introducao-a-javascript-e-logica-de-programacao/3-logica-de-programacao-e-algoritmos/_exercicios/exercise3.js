let array = ['java', 'javascript', 'python', 'html', 'css'];

// Exercicio 3 - Escrever dois algoritmos. Um deve retornar a maior palavra do array. O outro, retornar a menor.

let largestWord = '';
let smallestWord = '';
for (const word of array) {
  if (word.length > largestWord.length) {
    largestWord = word;
    smallestWord = word;
  }
}

for (const word of array) {
  if (word.length < smallestWord.length) {
    smallestWord = word;
  }
}

console.log(largestWord);
console.log(smallestWord);