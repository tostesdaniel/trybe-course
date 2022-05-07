const services = require('./service')

describe('Teste de Mocks e Inputs', () => {
  it('Testa a função getRandomInt', () => {
    services.getRandomInt = jest.fn().mockReturnValue(10);

    expect(services.getRandomInt()).toBe(10);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
  });

  it('Testa', () => {
    services.getRandomInt = jest.fn().mockImplementation((x, y) => x / y);

    expect(services.getRandomInt(100, 10)).toBe(10);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
    expect(services.getRandomInt).toHaveBeenCalledWith(100, 10);
  })
});