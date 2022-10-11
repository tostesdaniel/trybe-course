/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');
const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Ao resgatar um filme por id do banco de dados', () => {
  const MOVIE = {
    id: 8,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('Quando existe', () => {
    before(async () => sinon.stub(MoviesModel, 'getById').resolves(MOVIE));

    after(async () => MoviesModel.getById.restore());

    it('Retorna um objeto', async () => {
      const movie = await MoviesService.getById(8);

      expect(movie).to.be.an('object');
    });

    it('Retorna um objeto com chaves id, title, directedBy e releaseYear', async () => {
      const movie = await MoviesService.getById(8);

      expect(movie).to.have.all.keys(
        'id',
        'title',
        'directedBy',
        'releaseYear'
      );
    });

    it('Retorna um objeto com chaves e valores esperados', async () => {
      const movie = await MoviesService.getById(8);

      expect(movie).to.be.equal(MOVIE);
    });
  });

  describe('Quando não existe', () => {
    before(async () => sinon.stub(connection, 'execute').resolves([[]]))
    it('Retorna null', async () => {
      const movie = await MoviesService.getById(8);

      expect(movie).to.be.null;
    });
  });
});
