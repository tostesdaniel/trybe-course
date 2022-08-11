const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

describe('Ao resgatar um filme do banco de dados', () => {
  const MOVIE = [
    [
      {
        id: 8,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      },
    ],
  ];

  describe('Quando o filme existe', () => {
    before(async () => sinon.stub(connection, 'execute').resolves(MOVIE));

    after(async () => connection.execute.restore());

    it('Retorna um objeto', async () => {
      const movie = await movieModel.getById(8);

      expect(movie).to.be.an('object');
    });

    it('Retorna um objeto com chaves id, title, directedBy e releaseYear', async () => {
      const movie = await movieModel.getById(8);

      expect(movie).to.have.all.keys(
        'id',
        'title',
        'directedBy',
        'releaseYear'
      );
    });

    it('Retorna chave', async () => {
      const movie = await movieModel.getById(8);

      expect(movie).to.be.eql({
        id: 8,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });
  });

  describe('Quando o filme não existir', () => {
    before(async () => sinon.stub(connection, 'execute').resolves([[]]));

    after(async () => connection.execute.restore());

    it('Retorna null', async () => {
      const movie = await movieModel.getById(800);

      expect(movie).to.be.equal(undefined);
    });
  });
});
