import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('Testa página inicial', async () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const searchButton = screen.getByRole('button', { name: /Search Digimon/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toHaveTextContent('');
  });

  it('Testa a digitação de um Digimon', () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });

    userEvent.type(searchInput, 'agumon');
    expect(searchInput).toHaveValue('agumon');
  });

  it('Testa a pesquisa por um Digimon inexistente', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';
    const endpoint = 'https://digimon-api.vercel.app/api/digimon/name/';
    const query = 'Pikachu';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const searchButton = screen.getByRole('button', { name: /Search Digimon/i });

    userEvent.type(searchInput, 'Pikachu');
    userEvent.click(searchButton);
    await screen.findByText(ErrorMsg);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${endpoint}${query}`);
  });

  it('Testa a pesquisa por um Digimon válido', async () => {
    const digimon = [{
      name: 'Agumon',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
    }];
    const endpoint = 'https://digimon-api.vercel.app/api/digimon/name/';
    const query = 'Agumon';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const searchButton = screen.getByRole('button', { name: /Search Digimon/i });

    expect(searchInput).toHaveValue('');
    userEvent.type(searchInput, digimon[0].name);
    expect(searchInput).toHaveValue(digimon.name);

    userEvent.click(searchButton);

    const digimonName = await screen
      .findByRole('heading', { name: digimon[0].name, level: 2 });
    expect(digimonName).toBeInTheDocument();

    const digimonLevel = await screen.findByText(`level: ${digimon[0].level}`);
    expect(digimonLevel).toBeInTheDocument();

    const digimonImg = await screen.findByAltText(digimon[0].name);
    expect(digimonImg).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${endpoint}${query}`);
  });
});
