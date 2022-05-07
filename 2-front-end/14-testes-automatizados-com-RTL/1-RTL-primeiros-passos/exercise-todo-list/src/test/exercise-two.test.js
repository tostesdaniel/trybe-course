import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const taskInput = screen.getByLabelText('Tarefa:');
    const addTask = screen.getByText('Adicionar');
    const taskList = screen.getByRole('list');

    listTodo.forEach((task) => {
      expect(taskInput).toHaveValue('');
      userEvent.type(taskInput, task);
      userEvent.click(addTask);

      expect(taskList).toHaveTextContent(task);
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const PROP = 'Testar o componente Item';
    render(<Item content={ PROP } />);
    const taskList = screen.getByText(PROP);
    expect(taskList).toHaveTextContent(PROP);
  });
});
