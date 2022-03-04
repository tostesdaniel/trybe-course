// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function naoAbreNada(event) {
  event.preventDefault();
}

function soA(event) {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', naoAbreNada);
INPUT_CHECKBOX.addEventListener('click', naoAbreNada);
INPUT_TEXT.addEventListener('keypress', soA);