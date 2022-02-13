let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 4 - Utilizar o mesmo código do exercício 3. Porém, caso o valor seja maior que 20, fazer com que seja impressa a mensagem "valor maior que 20." Caso contrário, imprimir "valor menor ou igual a 20."

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let media = sum / numbers.length;

if (media >= 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20")
}