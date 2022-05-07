import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(indexTodo) {
    this.setState({
      selectedTodo: indexTodo,
    });
  }

  removeTodo(indexTodo) {
    this.setState((state) => ({
      listTodo: state.listTodo.filter((a, index) => index !== indexTodo),
    }));
  }

  render() {
    const { listTodo, selectedTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } />
              <input
                type="button"
                value="Selecionar"
                onClick={ () => this.selectTodo(index) }
              />
              <input
                type="button"
                value="Remover"
                disabled={ selectedTodo !== index }
                onClick={ () => this.removeTodo(index) }
              />
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
