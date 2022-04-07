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

// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    };
  }

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
  handleFirstBtnClick() {
    // console.log('This is the first button.');
    this.setState((state, _props) => ({

      // firstBtnClicks: 1,
      firstBtnClicks: state.firstBtnClicks + 1
    }));
  }

  handleSecondBtnClick() {
    // console.log('This is the second button.');
    this.setState((state, _props) => ({

      // secondBtnClicks: 1,
      secondBtnClicks: state.secondBtnClicks + 1
    }));
  }

  handleThirdBtnClick() {
    // console.log('This is the third button.');
    this.setState((state, _props) => ({

      // thirdBtnClicks: 1,
      thirdBtnClicks: state.thirdBtnClicks + 1
    }));
  }

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().
  render() {
    return (
      <>
        <button onClick={ this.handleFirstBtnClick }>{ this.state.firstBtnClicks }</button>
        <button onClick={ this.handleSecondBtnClick }>{ this.state.secondBtnClicks }</button>
        <button onClick={ this.handleThirdBtnClick }>{ this.state.thirdBtnClicks }</button>
      </>
    );
  }
}

export default App;
