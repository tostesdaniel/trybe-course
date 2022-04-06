import Pokedex from './Pokedex';
import './App.css';
import pokemons from './data';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
