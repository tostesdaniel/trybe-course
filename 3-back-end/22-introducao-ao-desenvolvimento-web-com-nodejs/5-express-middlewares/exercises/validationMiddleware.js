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

module.exports = validateName;
