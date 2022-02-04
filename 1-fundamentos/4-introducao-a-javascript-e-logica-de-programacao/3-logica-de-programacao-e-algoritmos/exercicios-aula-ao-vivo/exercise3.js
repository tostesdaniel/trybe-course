// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let jogada1 = 'papel';
let jogada2 = 'pedra';

if (jogada1 === jogada2) {
  console.log('A Ties');
}
else if (jogada1 === 'pedra' && jogada2 === 'papel' || jogada1 === 'tesoura' && jogada2 === 'pedra' || jogada1 === 'papel' && jogada2 === 'tesoura') {
  console.log("Player 2 won")
}
else {
  console.log("Player 1 won")
}


if (jogada1 === 'pedra' && jogada2 === 'papel') {
  
}