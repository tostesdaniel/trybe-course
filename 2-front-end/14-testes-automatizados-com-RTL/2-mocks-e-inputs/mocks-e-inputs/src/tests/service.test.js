const services = require('./service')

describe('Teste de Mocks e Inputs', () => {
  it('Testa a função getRandomInt', () => {
    services.getRandomInt = jest.fn().mockReturnValue(10);

    expect(services.getRandomInt()).toBe(10);
    expect(services.getRandomInt).toHaveBeenCalled();
    expect(services.getRandomInt).toHaveBeenCalledTimes(1);
  });
});