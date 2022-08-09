const error = (err, _req, res, _next) => {
  const statusByErrorCode = {
    notFound: 404,
  };
  const status = statusByErrorCode[err.code] || 500;

  return res.status(status).json({ error: { message: err.message } });
};

module.exports = error;
