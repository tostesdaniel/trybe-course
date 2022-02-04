// Exercicio 7 - Um programa que converte uma nota de A a F para de 0 a 100%

const nota = 79;

if (nota < 0 && nota > 100) {
  console.log("Erro: nota inválida");
}
else if (nota >= 90) {
  console.log('Nota = A');
}
else if (nota >= 80) {
  console.log('Nota = B');
}
else if (nota >= 70) {
  console.log('Nota = C');
}
else if (nota >= 60) {
  console.log('Nota = D');
}
else if (nota >= 50) {
  console.log('nota = E');
}
else {
  console.log('nota = F');
}