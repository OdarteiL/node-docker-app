const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Dockerized Node App!');
    expect(res.statusCode).toBe(200);
  });
});
