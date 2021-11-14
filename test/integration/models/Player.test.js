var supertest = require('supertest');

describe('Player (model)', function() {

  describe('#create()', function() {
    it('should create a new player in database', function (done) {

      supertest(sails.hooks.http.app)
      .post('/player')
      .send({ login: (Math.random() + 1).toString(36).substring(2), password: 'test' }) // On génère un login aléatoire ici car il faut que les login des joueurs soient uniques.
      .expect(200, done)

    });
  });

});
