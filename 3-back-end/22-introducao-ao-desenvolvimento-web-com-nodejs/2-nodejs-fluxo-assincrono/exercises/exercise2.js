/* Escreva um código para consumir a função construída no exercício anterior.

  Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
  // ────────────────────────────────────────────────────────────────────────────────
    Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
    // ─────────────────────────────────────────────────────────────────
    Utilize then e catch para manipular a Promise retornada pela função:
      Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
      Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */

const math = require('./exercise1');

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function main(randNum1, randNum2, randNum3) {
  const numbers = Array.from({ length: 3 }).map(
    (number, i) => (number = getRandomNumberInRange(0, 100))
  );
  console.log(numbers);
  try {
    const result = await math(...numbers);
    console.log(`Result is ${result}`);
  } catch (error) {
    console.log(`Error! ${error.message}`);
  }
}

main();
