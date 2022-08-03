import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserController } from './CreateUserController';
import { Request } from 'express';
import { mockResponse } from '../utils/mocks/mockResponse';

describe('CreateUserController', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  const createUserController = new CreateUserController();

  const response = mockResponse();

  it('Deve retornar status 201 quando o usuario for criado', async () => {
    const request = {
      body: {
        nome: 'Algum usuario',
        email: 'email@email.com',
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(201);
  });

  it('Deve retornar status 400 quando o nome não for informado', async () => {
    const request = {
      body: {
        nome: '',
        email: 'email@email.com',
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(400);
  });

  it('Deve retornar status 201 quando o email não for informado', async () => {
    const request = {
      body: {
        nome: 'Algum usuario',
        email: '',
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(201);
  });
});
