import { getConnection } from 'typeorm';
import createConnection from '../database';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from './CreateUserService';

describe('CreateUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  it('Deve retornar o id do usuario criado', async () => {
    const createUserService = new CreateUserService();

    const result = await createUserService.execute({
      // id: '6b3b0285-167d-4426-8d43-beb4e0d20075',
      id: uuid(),
      nome: 'Algum usuario',
      email: 'email@dio.com',
    });
    console.log(result);

    expect(result).toHaveProperty('id');
  });
});
