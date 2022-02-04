//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    contador += 1; 
  }
}
if (contador === 50) {
  console.log("Mensagem secreta");
}