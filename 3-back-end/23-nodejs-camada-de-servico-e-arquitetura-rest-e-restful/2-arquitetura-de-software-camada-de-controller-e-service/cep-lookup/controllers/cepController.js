const cepService = require('../services/cepService');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const cepInfo = await cepService.getCep(cep);

  if (cepInfo.error) {
    return next(cepInfo.error);
  }

  return res.status(200).json(cepInfo);
};

module.exports = {
  getCep,
};
