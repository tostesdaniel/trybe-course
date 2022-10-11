const cepModel = require('../models/cepModel');

const cepRegex = /^\d{5}-?\d{3}$/;

const formatCep = (cep) => {
  const formattedCepRegex = /^\d{5}\d{3}$/;

  if (formattedCepRegex.test(cep)) return cep;

  return cep.replace('-', '');
};

const formatCepForReturn = ({ cep, logradouro, bairro, localidade, uf }) => {
  const formatCep = (cep) => {
    const cepRegex = /^\d{5}-\d{3}$/;

    if (cepRegex.test(cep)) return cep;

    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const getCep = async (cep) => {
  if (!cepRegex.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  const formattedCep = formatCep(cep);
  const CEP = formatCepForReturn(await cepModel.getCep(formattedCep));

  if (!CEP) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return CEP;
};

module.exports = {
  getCep,
};
