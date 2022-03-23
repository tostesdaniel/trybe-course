// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (data) => {
  const h2 = document.querySelector('#jokeContainer');
  const divJoke = document.createElement('div');

  divJoke.innerText = data;

  h2.appendChild(divJoke);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const data2 = () => {
    fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => {
        const joke = data.joke;
        appendJoke(joke);
      });
  };
  data2();
}

window.onload = () => fetchJoke();
