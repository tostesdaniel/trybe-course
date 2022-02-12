let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descobrir quantos valores ímpares tem no array e imprimir o resultado. Caso não haja números ímpares, imprimir "nenhum valor ímpar encontrado"

let oddNumbers = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    oddNumbers += 1;
  }
}
if (oddNumbers === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(oddNumbers);
}