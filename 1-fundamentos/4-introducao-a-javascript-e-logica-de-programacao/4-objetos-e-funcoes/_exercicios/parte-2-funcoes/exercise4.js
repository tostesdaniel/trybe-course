//  Criar uma função que receba uma array de nomes e retorne o nome mais comprido

function longestElement(array) {
  let longestWord = array[0];
  for (let word in array) {
    if (longestWord.length < array[word].length) {
      longestWord = array[word];
    }
  }
  return longestWord;
}
console.log(longestElement(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));