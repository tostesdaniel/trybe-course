const services = require('./service')

describe('Teste de Mocks', () => {
  it('1 - Testa a função getRandomInt', () => {
    services.getRandomInt = jest.fn().mockReturnValue(10);

    expect(services.getRandomInt()).toBe(10);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
  });

  it('2 - Testa implementação mockada da função', () => {
    services.getRandomInt = jest.fn().mockImplementation((x, y) => x / y);

    expect(services.getRandomInt(100, 10)).toBe(10);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
    expect(services.getRandomInt).toHaveBeenCalledWith(100, 10);
  });
});

describe('3 - Testa implementações', () => {
  it('Testa implementação com uma multiplicação de três números', () => {
    services.getRandomInt = jest.fn()
    .mockImplementation((x, y, z) => x * y * z);

    expect(services.getRandomInt(1, 2, 3)).toBe(6);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
    expect(services.getRandomInt).toHaveBeenCalledWith(1, 2, 3);
  });

  it('Testa implementação com o dobro do valor de um número', () => {
    services.getRandomInt.mockReset();
    expect(services.getRandomInt).toHaveBeenCalledTimes(0);
    
    services.getRandomInt = jest.fn().mockImplementation((n) => 2 * n);

    expect(services.getRandomInt(10)).toBe(20);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
    expect(services.getRandomInt).toHaveBeenCalledWith(10);
  });
});