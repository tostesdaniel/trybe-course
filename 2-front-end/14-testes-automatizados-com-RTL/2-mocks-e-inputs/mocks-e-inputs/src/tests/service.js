// Crie uma função que gere um número aleatório
const getRandomInt = () => {
  Math.floor(Math.random() * 101) ;
}

const toUpperCase = (string) => string.toUpperCase();
const getFirstLetter = (string) => string.slice(0, 1);
const concatStrings = (str1, str2) => str1.concat(' ', str2);

module.exports = { getRandomInt, toUpperCase, getFirstLetter, concatStrings };