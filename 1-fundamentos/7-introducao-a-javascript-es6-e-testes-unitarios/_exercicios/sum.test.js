const sum = require('./sum');

describe('Tests sum function', () => {
  // Teste se o retorno de sum(4, 5) é 9
  // Teste se o retorno de sum(0, 0) é 0

  it('verifies the return of sum of (4, 5) and (0, 0)', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
 
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

  it('checks if an error is thrown and if "parameters" must be numbers is thrown when sum(4, "5")', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
});
