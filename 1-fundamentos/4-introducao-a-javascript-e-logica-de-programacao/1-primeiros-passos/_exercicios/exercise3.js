const a = 6;
const b = 9;
const c = 3;

// Exercício 3 - Um programa que retorna o maior dos três números.

if (a > b && a > c) {
  console.log(a + (" é o maior número entre os três."));
}
else if (b > a && b > c) {
  console.log(b + (" é o maior número entre os três."));
}
else {
  console.log(c + (" é o maior número entre os três."));
}