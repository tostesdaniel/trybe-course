import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const addTask = screen.queryByText('Adicionar');

    expect(addTask).toBeInTheDocument();
    expect(addTask).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    const TASK_INPUT = 'Concluir o exercício 1';

    render(<App />);
    const taskInput = screen.queryByLabelText('Tarefa:');
    const addTask = screen.queryByText('Adicionar');
    const taskList = screen.getByRole('list');

    expect(taskInput).toBeInTheDocument();
    expect(taskInput).toHaveTextContent('');

    userEvent.type(taskInput, TASK_INPUT);
    expect(taskInput).toHaveValue(TASK_INPUT);

    userEvent.click(addTask);
    expect(taskInput).toHaveValue('');
    expect(taskList).toHaveTextContent(TASK_INPUT);
  });
});
