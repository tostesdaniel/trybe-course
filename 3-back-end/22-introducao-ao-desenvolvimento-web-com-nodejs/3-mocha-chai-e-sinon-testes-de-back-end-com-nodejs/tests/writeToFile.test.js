const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const writeToFile = require('../exercises/writeToFile');

const FILE_CONTENT = 'Logitech has just sent me a replacement headset =)';

describe('Tests writeToFile function', () => {
  describe('When file exists', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.writeFileSync.restore();
    });

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
