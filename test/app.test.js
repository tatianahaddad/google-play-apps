const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');


describe('GET /apps', () => {
  it('returns response', () => {
    return request(app)
      .get('/apps')
      .expect(200)
  })
})