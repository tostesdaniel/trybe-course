const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme em um array. 

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual));
}

console.log(flatten());
