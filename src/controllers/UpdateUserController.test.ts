import { Request } from 'express';
import { UpdateUserController } from './UpdateUserController';
import createConnection from '../database';
import { getConnection } from 'typeorm';
import { mockResponse } from '../utils/mocks/mockResponse';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserController', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve retornar status 204 quando usuario for editado', async () => {
    const mockUser = await fakeData.createUser();

    const updateUserController = new UpdateUserController();

    const request = {
      body: {
        id: mockUser.id,
        nome: 'Outro usuario',
        email: 'email@example.com',
      },
    } as Request;

    const response = mockResponse();

    await updateUserController.handle(request, response);

    expect(response.state.status).toBe(204);
  });
});
