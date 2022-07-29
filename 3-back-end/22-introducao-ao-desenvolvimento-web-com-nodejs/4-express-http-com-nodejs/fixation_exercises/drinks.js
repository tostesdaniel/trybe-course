const express = require('express');
const app = express();

// ✅ 1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

// ⏳ 2. Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const sortRecipes = (recipes) => recipes.sort((a, b) => a.name.localeCompare(b.name));

app.get('/recipes', (req, res) => {
  const sortedRecipes = sortRecipes(recipes);
  res.json(sortedRecipes);
});

app.get('/drinks', (req, res) => {
  const sortedDrinks = sortRecipes(drinks);
  res.json(sortedDrinks);
});

app.listen('3000', () => {
  console.log('Aplicação ouvindo na porta 3000');
});
