const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product)
    return res.status(404).json({ message: 'Produto não encontrado' });

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand)
    return res.status(400).json({ message: 'Há campos não preenchidos' });

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products)
    return res.status(404).json({ message: 'Produto não encontrado' });

  return res.status(200).json({ message: 'Produto deletado com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand)
    return res.status(400).json({ message: 'Há campos não preenchidos' });

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products)
    return res.status(404).json({ message: 'Produto não encontrado' });

  return res.status(200).json({ message: 'Produto editado com sucesso' });
});

module.exports = router;
