// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const carolzita = 22;
const murilo = 19;
const baêta = 5;

if (carolzita < murilo && carolzita < baêta) {
  console.log("carolzita" + " é a pessoa mais nova.");
}
else if (murilo < carolzita && murilo < baêta) {
  console.log("murilo" + " é a pessoa mais nova.");
}
else {
  console.log("baêta" + " é pessoa mais nova.");
}