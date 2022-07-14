// Exercicio 1 - Modificar a função para que seja arrow function, assim como as concatenações para template literals

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

console.log(testingScope(true));

testingScope(true); */

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercicio 2 - Função que retorna o array oddsAndEvens em ordem crescente

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = arrayToSort => arrayToSort.sort((a, b) => a - b);
const sortedArray = sortArray(oddsAndEvens);

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
