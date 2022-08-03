import { AfterInsert, getConnection } from 'typeorm';
import createConnection from '../database';
import { GetAllUserService } from './GetAllusersService';
import { CreateUserService } from './CreateUserService';
import { v4 as uuid } from 'uuid';

describe('GetALlUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  it('Deve retornar todos os usuarios cadastrados', async () => {
    const createUserService = new CreateUserService();

    await createUserService.execute({
      id: uuid(),
      nome: 'Algum usuario',
      email: 'algumusuario@email.com',
    });

    await createUserService.execute({
      id: uuid(),
      nome: 'Outro usuario',
      email: '',
    });

    const expectedResponse = [
      {
        nome: 'Algum usuario',
        email: 'algumusuario@email.com',
      },
      {
        nome: 'Outro usuario',
        email: '',
      },
    ];

    const getAllUserService = new GetAllUserService();

    const result = await getAllUserService.execute();

    expect(result).toMatchObject(expectedResponse);
  });
});
