function validateName(req, res, next) {
  const { productName } = req.body;
  if (!productName) {
    return res.status(400).json({ message: 'productName is required' });
  }

  if (productName.length < 4) {
    return res
      .status(400)
      .json({ message: 'productName must be at least 4 characters' });
  }
  next();
}

function validateInfo(req, res, next) {
  const { infos } = req.body;
  if (!infos) return res.status(400).json({ message: 'infos is required' });
  if (!infos.saleDate || !infos.warrantyPeriod)
    return res.status(400).json({ message: 'Some infos cannot be blank' });
  next();
}

function validateDate(req, res, next) {
  const {
    infos: { saleDate },
  } = req.body;
  if (!saleDate) {
    return res.status(400).json({ message: 'saleDate is required' });
  }
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) {
    return res.status(400).json({ message: 'Invalid date format' });
  }
  next();
}

module.exports = { validateName, validateInfo, validateDate };
