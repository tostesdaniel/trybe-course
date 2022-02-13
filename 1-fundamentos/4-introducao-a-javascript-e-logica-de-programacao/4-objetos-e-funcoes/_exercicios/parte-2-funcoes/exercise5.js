// Exercicio 5 - Criar uma função que receba um array de inteiros e retorne o que mais se repete

function returnRepeatedNum(numbers) {
  let repeatCount = 0;
  let numCount = 0;
  let repeatedNumIndex = 0;
  for (const index in numbers) {
    let comparison = numbers[index];
    for (const index2 in numbers) {
      if (comparison === numbers[index2]) {
        numCount += 1;
      }
    }  
    if (numCount > repeatCount) {
      repeatCount = numCount;
      repeatedNumIndex = index;
    }
    numCount = 0;
    return numbers[repeatedNumIndex];
  }
}
console.log(returnRepeatedNum([2, 3, 2, 5, 8, 2, 3]));