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

describe('5 -', () => {
  services.toUpperCase = jest.spyOn(services, "toUpperCase").mockImplementation((string) => string.toLowerCase());
  services.getFirstLetter = jest.fn().mockImplementation((string) => string.slice(-1));
  services.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(` ${str2} ${str3}`));

  it('Testa implementação de toUpperCase()', () => {
    const string = 'This is a brief test';
    expect(services.toUpperCase(string)).toBe(string.toLowerCase());
    expect(services.toUpperCase).toHaveBeenCalled();
    expect(services.toUpperCase).toHaveBeenCalledTimes(1);
    expect(services.toUpperCase).toHaveBeenCalledWith(string);
  });

  it('Testa implementação de getFirstLetter()', () => {
    const string = 'First';
    expect(services.getFirstLetter(string)).toBe('t');
    expect(services.getFirstLetter).toHaveBeenCalled();
    expect(services.getFirstLetter).toHaveBeenCalledTimes(1);
    expect(services.getFirstLetter).toHaveBeenCalledWith(string);
  });

  it('Testa implementação de concatStrings()', () => {
    const strings = ['Don\'t', 'stop', 'me.'];
    expect(services.concatStrings(strings[0], strings[1], strings[2])).toBe('Don\'t stop me.');
    expect(services.concatStrings).toHaveBeenCalled();
    expect(services.concatStrings).toHaveBeenCalledTimes(1);
    expect(services.concatStrings).toHaveBeenCalledWith(strings[0], strings[1], strings[2]);
  });

  it('Testa se as implementação da primeira função é resetada', () => {
    services.toUpperCase.mockRestore();

    const string = 'Yet another brief test';
    expect(services.toUpperCase(string)).toBe(string.toUpperCase());
  });
});