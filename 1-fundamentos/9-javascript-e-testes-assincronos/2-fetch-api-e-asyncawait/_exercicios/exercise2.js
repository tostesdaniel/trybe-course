const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
  const response = await fetch(url);
  const data = await response.json();
  const coins = data.data;

  coins.filter((coin, index) => {
    if (index < 10) {
      append(coin);
    }
  });
  return coins
  } catch(error) {
    console.log(`Something's not right here: \n${error}`);
  }
}

const append = async ({ name, symbol, priceUsd }) => {
  const ul = document.querySelector('#list-of-coins');

  const li = document.createElement('li');

  const treatedPrice = parseFloat(priceUsd).toFixed(2);

  li.innerHTML = `(${symbol}) ${name} - $USD: ${treatedPrice} `

  ul.appendChild(li);
}
window.onload = fetchCoins();
