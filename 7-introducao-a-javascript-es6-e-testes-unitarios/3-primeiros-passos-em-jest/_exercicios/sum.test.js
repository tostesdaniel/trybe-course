const sum = require('./sum');

describe('Tests sum function', () => {
  it('verifies the return of sum of (4, 5) and (0, 0)', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
 
  it('checks if an error is thrown and if "parameters" must be numbers is thrown when sum(4, "5")', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
});
