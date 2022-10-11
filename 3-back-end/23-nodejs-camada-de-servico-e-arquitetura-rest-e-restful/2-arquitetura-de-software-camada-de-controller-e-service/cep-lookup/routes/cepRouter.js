const express = require('express');
const cepController = require('../controllers/cepController');
const cepRouter = express.Router();

cepRouter.get('/:cep', cepController.getCep);

module.exports = cepRouter;
