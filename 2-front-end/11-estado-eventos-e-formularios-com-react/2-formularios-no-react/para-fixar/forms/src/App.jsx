import React from 'react';
import AboutYou from './AboutYou';
import './App.css';
import ComidaFavorita from './ComidaFavorita';
import FavoriteMeme from './FavoriteMeme';
import FavoriteNumber from './FavoriteNumber';
import PanicButton from './PanicButton';

class App extends React.Component {
  constructor() {
    super()

    this.eventHandler = this.eventHandler.bind(this)
    this.state = {
      comidaFavorita: '',
      panicButton: false,
      favoriteNumber: 0,
      aboutYou: '',
      favoriteMeme: '',
      // 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
      formularioComErros: true, 
    }
  }

  handleError() {
    const { comidaFavorita, panicButton, favoriteNumber, aboutYou, favoriteMeme } = this.state;
    
    const errorCases = [
      !comidaFavorita.length,
      !panicButton,
      favoriteNumber !== 0,
      !aboutYou.length,
      !favoriteMeme.length,
    ];
    
    const formularioPreenchido = errorCases.every((error) => error !== true);
    
    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }
  
  // 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
  eventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { eventHandler } = this;
    const { comidaFavorita, favoriteMeme, aboutYou, favoriteNumber, formularioComErros } = this.state;
    return (
      <div className="App">
        <h1>Aprendendo Forms com React</h1>
        <form className="form">
          {/* 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .  */}
          <fieldset>
            {/* 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai. */}
            <ComidaFavorita
              value={comidaFavorita}
              onChange={this.eventHandler}
            />
            <PanicButton
              onChange={this.eventHandler}
            />
            <FavoriteNumber
              value={favoriteNumber}
              onChange={this.eventHandler}
            />
            <AboutYou
              value={aboutYou}
              onChange={eventHandler}
            />
            <FavoriteMeme
              value={favoriteMeme}
              onChange={eventHandler}
            />
          </fieldset>
        </form>
        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
}

export default App;
