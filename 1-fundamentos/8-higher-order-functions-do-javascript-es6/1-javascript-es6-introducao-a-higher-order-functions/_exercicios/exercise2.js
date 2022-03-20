// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

function raffle() {
  const selNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return selNumber;
}

function announceResult(n, callback) {
  if (callback() === n) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(announceResult(3, raffle));
