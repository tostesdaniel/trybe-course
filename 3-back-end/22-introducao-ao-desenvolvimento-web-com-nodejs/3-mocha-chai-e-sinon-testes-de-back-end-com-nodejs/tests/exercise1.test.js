const { expect } = require('chai');
const checkNaturalNum = require('../exercises/checkNaturalNum');

describe('Tests function', () => {
  describe('Checks if', () => {
    describe('when given a number greater than 0', () => {
      it('returns "positive"', () => {
        const result = checkNaturalNum(2);

        expect(result).to.equal('positive');
      });

      it('returns a string', () => {
        const result = checkNaturalNum(2);

        expect(result).to.be.a('string');
      });
    });

    describe('when given a number lesser than 0', () => {
      it('returns "negative"', () => {
        const result = checkNaturalNum(-4);

        expect(result).to.equal('negative');
      });

      it('returns a string', () => {
        const result = checkNaturalNum(-4);

        expect(result).to.be.a('string');
      });
    });
    describe('when given "0"', () => {
      it('returns "absolute"', () => {
        const result = checkNaturalNum(0);

        expect(result).to.equal('absolute');
      });

      it('returns a string', () => {
        const result = checkNaturalNum(0);

        expect(result).to.be.a('string');
      });
    });
  });
});
