function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
  next();
}

module.exports = authMiddleware;
