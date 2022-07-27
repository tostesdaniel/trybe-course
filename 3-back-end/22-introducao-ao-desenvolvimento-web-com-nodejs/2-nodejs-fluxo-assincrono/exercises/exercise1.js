/* Crie uma função que receba três parâmetros e retorna uma Promise.

    Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
    // ─────────────────────────────────────────────────────────────────
    Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
    // ─────────────────────────────────────────────────────────────────
    Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    // ─────────────────────────────────────────────────────────────────
    Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
 */

async function main(param1, param2, param3) {
  const validParams =
    Number.isInteger(param1) &&
    Number.isInteger(param2) &&
    Number.isInteger(param3);

  const result = validParams && (param1 + param2) * param3;
  const sumGreaterThan50 = result > 50;

  const promise = new Promise((resolve, reject) => {
    if (!validParams)
      reject(new Error('ERROR: Values provided are not numbers'));

    if (!sumGreaterThan50) reject(new Error('ERROR: Values are too low'));

    resolve(result);
  });
  console.log(promise);
  return promise;
}

main(6, 7, 10);
