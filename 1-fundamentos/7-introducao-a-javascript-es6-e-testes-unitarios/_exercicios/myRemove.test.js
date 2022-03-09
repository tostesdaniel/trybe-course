const myRemove = require('./myRemove')

describe('Test myRemove function', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado 
  it('verifies if myRemove([1, 2, 3, 4], 3) returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('verifies if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado 
  it('verifies if myRemove([1, 2, 3, 4], 5) returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
