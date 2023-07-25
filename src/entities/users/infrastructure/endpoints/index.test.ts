import express, { type Express } from 'express';
import request from 'supertest';

import ROUTER from './userEntity.router'; // Replace with the actual file path

jest.mock('@application/users/infrastructure/implementations/controllers', () => ({
  CONTROLLER: {
    CREATE: jest.fn(),
  },
}));

describe('Router - User', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use('/', ROUTER);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('It should respond with a JSON message on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Obteniendo el recurso de usuarios' });
  });

  it('It should respond with a JSON message on PUT /', async () => {
    const response = await request(app).put('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Modificando el recurso de usuarios' });
  });

  it('It should respond with a JSON message on DELETE /', async () => {
    const response = await request(app).delete('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ messaje: 'Eliminando un nuevo recurso de usuarios' });
  });
});
