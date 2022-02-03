const angle1 = 45;
const angle2 = -72;
const angle3 = -60;

// Exercício 5 - Um programa que retorne true se a soma de todos os ângulos for maior ou igual a 180 ou false, caso contrário.

let somaDosAngulos = angle1 + angle2 + angle3;

if (somaDosAngulos >= 180) {
  console.log(true);
}
else if (somaDosAngulos <= 180 && somaDosAngulos > 0) {
  console.log(false);
}
else {
  console.log("O triângulo é inválido ou a soma dos ângulos possui um valor negativo.");
}



