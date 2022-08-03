import createConnection from '../database';
import { CreateUserController } from './CreateUserController';
import { Request } from 'express';
import { mockResponse } from '../utils/mocks/mockResponse';

describe('CreateUserController', () => {
  it('Deve retornar status 201 quando o usuario for criado', async () => {
    const connection = await createConnection();
    await connection.runMigrations();
    const createUserController = new CreateUserController();

    const request = {
      body: {
        nome: 'Algum usuario',
        email: 'email@email.com',
      },
    } as Request;

    const response = mockResponse();

    await createUserController.handle(request, response);

    await connection.query('DELETE FROM usuarios');

    expect(response.state.status).toBe(201);
  });
});
