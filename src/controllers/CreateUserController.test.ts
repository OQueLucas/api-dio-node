import { CreateUserController } from './CreateUserController';
import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

describe('CreateUserController', () => {
  it('Deve retornar o id do usuário criado', () => {
    const createUserController = new CreateUserController();

    const result = createUserController.handle();
  });
});
