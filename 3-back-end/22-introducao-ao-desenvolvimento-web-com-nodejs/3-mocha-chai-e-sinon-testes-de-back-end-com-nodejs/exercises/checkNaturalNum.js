module.exports = (n) => {
  if (typeof n !== 'number') return 'Error: Value must be a number';
  if (n > 0) return 'positive';
  if (n < 0) return 'negative';
  return 'absolute';
};
