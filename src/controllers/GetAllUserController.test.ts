import createConnection from '../database';
import { getConnection } from 'typeorm';
import { mockRequest } from '../utils/mocks/mockRequest';
import { mockResponse, MockResponse } from '../utils/mocks/mockResponse';
import { GetAllUserController } from './GetAllUserController';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserController', () => {
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

  it('Deve retornar status 200 quando pegar todos os usuarios', async () => {
    await fakeData.execute();

    const getAllUserController = new GetAllUserController();

    const request = mockRequest({});
    const response = mockResponse();

    await getAllUserController.handle(request, response);

    expect(response.state.status).toBe(200);
  });
});
