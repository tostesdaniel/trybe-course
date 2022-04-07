// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log(). 

import React from 'react';
import './App.css';

class App extends React.Component {
// 4 - Garanta acesso ao objeto this na função que você declarou.
  constructor() {
    super()
    this.handleFirstBtnClick = this.handleFirstBtnClick.bind(this)
    this.handleSecondBtnClick = this.handleSecondBtnClick.bind(this)
    this.handleThirdBtnClick = this.handleThirdBtnClick.bind(this)
  }
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
  handleFirstBtnClick() {
    console.log('This is the first button.');
  }
  
  handleSecondBtnClick() {
    console.log('This is the second button.');
  }
  
  handleThirdBtnClick() {
    console.log('This is the third button.');
  }
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().
  render() {
    return (
      <>
        <button onClick={this.handleFirstBtnClick}>(1)</button>
        <button onClick={this.handleSecondBtnClick}>(2)</button>
        <button onClick={this.handleThirdBtnClick}>(3)</button>
      </>
    );
  }
}

export default App;
