const connection = require('./connection');

const getCep = async (cep) => {
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';
  const [CEP] = await connection.execute(query, [cep]);

  if (!CEP) return null;

  return CEP[0];
};

module.exports = {
  getCep,
};
