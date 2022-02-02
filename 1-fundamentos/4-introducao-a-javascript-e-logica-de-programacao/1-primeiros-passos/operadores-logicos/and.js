const currentHour = 10;
let message;

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >=18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!"
}
else {
  message = "Hmmm, cheiro de café recém passado"
}

console.log(message)