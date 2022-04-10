import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.eventHandler = this.eventHandler.bind(this)

    this.state = {
      comidaFavorita: '',

    }
  }

// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
  eventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Aprendendo Forms com React</h1>
        <form className="form">
{/* 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .  */}
          <fieldset>
            <label>
              Qual dentre essas comidas é sua predileta?
              <select
              name="comidaFavorita"
              onChange={this.eventHandler}
              value={this.state.comidaFavorita}
              >
                <option value=""></option>
                <option value="frutosDoMar">Frutos do Mar</option>
                <option value="massas">Massas</option>
                <option value="paes-e-bolos">Pães e Bolos</option>
              </select>
            </label>

            <label>
              Não toque neste botão
{/* 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente. */}
              <input
              type="checkbox"
              name="panicButton"
              onChange={this.eventHandler}
              />
            </label>

            <label>
              Qual seu número favorito?
              <input 
                type="number" 
                name="favoriteNumber"
                value={this.state.favoriteNumber}
                onChange={this.eventHandler}
              />
            </label>

            <label>
              Diga algo sobre você
              <textarea
                name="aboutYou"
                cols="50"
                rows="1"
                onChange={this.eventHandler}
              >

              </textarea>
            </label>

            <label>
{/* 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário. */}
              Nos mostre seu meme favorito
              <input type="file" name="favoriteMeme" />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
