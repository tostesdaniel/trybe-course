// Exercicio 1 - Criar uma função que receba uma string e retorne um booleano se for um palíndromo ou não

function verificaPalindrome(word) {
  for (const pos in word) {
    if (word[pos] != word[(word.length - 1) - pos]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome('estudante'));
console.log(verificaPalindrome('arara'));