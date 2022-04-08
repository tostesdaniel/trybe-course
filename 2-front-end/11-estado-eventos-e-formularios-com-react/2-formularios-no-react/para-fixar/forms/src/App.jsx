import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleNumberInputChange = this.handleNumberInputChange.bind(this)

    this.state = {
      favoriteNumber: ''
    }
  }

  handleNumberInputChange(event) {
    this.setState({favoriteNumber: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Aprendendo Forms com React</h1>
        <form className="form">
          <label>
            Qual dentre essas comidas é sua predileta?
            <select name="comidaFavorita">
              <option value="frutosDoMar">Frutos do Mar</option>
              <option value="massas">Massas</option>
              <option value="paes-e-bolos">Pães e Bolos</option>
            </select>
          </label>

          <label>
            Não toque neste botão
            <input type="checkbox" name="panicButton"/>
          </label>

          <label>
            Qual seu número favorito?
            <input 
              type="number" 
              name="favoriteNumber"
              value={this.state.favoriteNumber}
              onChange={this.handleNumberInputChange}
            />
          </label>

          <label>
            Diga algo sobre você
            <textarea name="aboutYou" cols="50" rows="1"></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default App;
