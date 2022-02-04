// Exercicio 6 - Um programa que receba o nome de uma peça de xadrez e retorna seu tipo de movimento no tabuleiro.

const chessPiece = 'cavalo';

// Desafio: fazer o programa funcionar com a constante sendo escrita com letras maiúsculas ou minúsculas, sem aumentar a quantidade de declarações;

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('O rei se move uma casa para qualquer uma das quatro direções.');
    break;
  case 'bispo':
    console.log('O bispo se move diagonalmente.');
    break;
  case 'rainha':
    console.log('A rainha se move em todos os eixos: vertical, horizoltal e diagonal.');
    break;
  case 'cavalo':
    console.log('O cavalo se move em "L" e pula sobre as peças.');
    break;
  case 'torre':
    console.log('A torre se move vertical e horizontalmente.');
    break;
  case 'peão':
    console.log("O peão se move uma casa pra frente.");
    break;
 
    // Se a peça for inválida, retorna erro;

    default:
    console.log('Erro, peça inválida!');
    break;
};