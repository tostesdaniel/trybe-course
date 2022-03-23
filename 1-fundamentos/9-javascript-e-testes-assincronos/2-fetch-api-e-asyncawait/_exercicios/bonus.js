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

const fetchPrice = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.log(data.usd);
    // console.log(typeof data);
    // console.log(typeof data.usd);
    return data.usd;
  } catch (error) {
    console.log(`Something's not right at fetchPrice():
    ${error}`);
  }
}

const append = async ({ name, symbol, priceUsd }) => {
  const ul = document.querySelector('#list-of-coins');

  const li = document.createElement('li');

  const treatedPrice = parseFloat(priceUsd).toFixed(2);
  const fetchPriceObj = await fetchPrice();
  const usdToBrl = fetchPriceObj.brl;
  const convertedPrice = treatedPrice * usdToBrl;

  li.innerHTML = `(${symbol}) ${name} - $USD: ${convertedPrice} `

  ul.appendChild(li);
}

window.onload = () => {
  fetchCoins();
  fetchPrice();
}
