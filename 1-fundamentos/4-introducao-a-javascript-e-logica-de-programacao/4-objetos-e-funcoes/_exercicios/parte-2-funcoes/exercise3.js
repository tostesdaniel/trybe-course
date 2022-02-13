// Exercicio 3 - Criar  uma função que receba um array de inteiros e retorne o índice do menor valor

function returnIndex(array) {
  let smallestIndex = 0;
  for (let index in array) {
    if (array[smallestIndex] > array[index]) {
      smallestIndex = index;
    }
  }
  return smallestIndex;
}

console.log(returnIndex([2, 4, 6, 7, 10, 0, -3]));