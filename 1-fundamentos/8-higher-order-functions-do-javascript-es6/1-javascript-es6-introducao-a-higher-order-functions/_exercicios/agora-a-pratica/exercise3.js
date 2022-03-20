// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['N.A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkHits(gabarito, respostas) {
    return gabarito.reduce((hits, curr, index) => {
    if (respostas[index] === 'N.A') {
      return hits;
    } else if (curr === respostas[index]) {
      return hits += 1;
    }
    return hits -= 0.5;
  }, 0);
}

function score(gabarito, respostas, callback) {
  return callback(gabarito, respostas);
}

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, checkHits));
