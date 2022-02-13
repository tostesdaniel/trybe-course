// Exercicio 2 - Criar uma função que receba um array de inteiros e retorne o indice do maior valor

function returnIndex(array) {
  let largestIndex = 0;
  for (let index in array) {
    if (array[largestIndex] < array[index]) {
      largestIndex = index;
    }
  }
  return largestIndex;
}
console.log(returnIndex([2, 3, 6, 7, 10, 1]));