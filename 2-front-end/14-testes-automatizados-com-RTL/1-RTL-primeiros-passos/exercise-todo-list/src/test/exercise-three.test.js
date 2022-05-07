import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Não deve haver botões de remover após a primeira renderização da página', () => {
    render(<App />);
    const btnRemove = screen.queryAllByRole('button', { name: 'Remover' });

    expect(btnRemove.length).toBe(0);
  });

  test('Testando a seleção e remoção de uma task', async () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    expect(screen.queryByText('Estudar')).toBeInTheDocument();

    const selectTask = screen.queryAllByRole('button', { name: 'Selecionar' })[1];
    expect(selectTask).toBeInTheDocument();

    const btnRemove = screen.queryAllByRole('button', { name: 'Remover' })[1];
    expect(btnRemove.disabled).toBe(true);

    userEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);

    userEvent.click(btnRemove);
    expect(screen.queryByText('Estudar')).not.toBeInTheDocument();
  });
});
