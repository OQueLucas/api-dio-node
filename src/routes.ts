import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

router.get('/', (request: Request, response: Response) => {
  return response.json({ mensagem: 'Bem vindo a nossa DIO API' });
});

router.post('/usuarios', createUserController.handle);
router.get('/usuarios', getAllUserController.handle);

export { router };
