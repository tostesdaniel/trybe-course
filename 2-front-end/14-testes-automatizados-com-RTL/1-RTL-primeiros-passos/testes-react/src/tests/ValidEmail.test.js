import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('is-valid-email');
  expect(isValidText).not.toBeInTheDocument();
});

// Utilizando a função 'toHaveAttribute' verificamos se o elemento possui a classe
// com o nome esperado para cada situação.
test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('is-valid-email');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('is-valid-email');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});