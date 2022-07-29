const { expect } = require('chai');
const writeToFile = require('../exercises/writeToFile');

const FILE_CONTENT = 'Logitech has just sent me a replacement headset =)';

describe('Tests writeToFile function', () => {
  describe('When file exists', () => {
    const file = '../thanks.txt';

    it('should return "ok"', () => {
      const result = writeToFile(file, FILE_CONTENT);

      expect(result).to.equal('ok');
    });

    it('should return a string', () => {
      const result = writeToFile(file, FILE_CONTENT);

      expect(result).to.be.a('string');
    });
  });
});
