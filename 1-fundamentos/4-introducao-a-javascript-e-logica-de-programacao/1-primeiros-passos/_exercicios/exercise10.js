// Exercicio 10 - Um programa com duas constantes: custo do produto e valor de venda. Calular o lucro ao vender 1000 produtos

//  Imposto de 20% sobre o custo do produto

//  Imprimir erro e encerrar se o valor de entrada for menor que zero

const valorCusto = 20;
const valorVenda = 45;

if (valorCusto >= 0 &&  valorVenda >= 0) {
  const valorCustoTotal = valorCusto * 1.20;
  const lucroTotal = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro: valor inválido.");
}
