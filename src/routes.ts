import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
  return response.json({ mensagem: 'Bem vindo a nossa DIO API' });
});

router.post('/usuarios', createUserController.handle);

export { router };
