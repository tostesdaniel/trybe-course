// Crie uma função que gere um número aleatório
const getRandomInt = () => {
  Math.floor(Math.random() * 101) ;
}

// Crie três funções.

// Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
// Elabore a terceira função: essa função deve receber duas strings e concatená-las.
const toUpperCase = (string) => string.toUpperCase();
const getFirstLetter = (string) => string.slice(0, 1);
const concatStrings = (str1, str2) => str1.concat(' ', str2);

// Crie uma função que faça requisição para a api dog pictures.
const fetchDogImage = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const { message } = await response.json();
  console.log(message);
  this.setState({
    dogImage: message,
  });
}

module.exports = {
  getRandomInt,
  toUpperCase,
  getFirstLetter,
  concatStrings,
  fetchDogImage,
};