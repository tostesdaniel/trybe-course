// Criar uma função que receba uma string 'word' e outra string 'ending'. Depois, verificar se a string ending é o final da string word. String ending sempre será menor que string word.

function verifyEndOfWord(word, ending) {
  if (word.endsWith(ending)) {
    return true;
  } return false;
}
console.log(verifyEndOfWord('O céu é azul', 'azul'));