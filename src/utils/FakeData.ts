import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData {
  createUserService = new CreateUserService();

  async execute() {
    await this.createUserService.execute({
      id: uuid(),
      nome: 'Algum usuario',
      email: 'algumusuario@email.com',
    });

    await this.createUserService.execute({
      id: uuid(),
      nome: 'Outro usuario',
      email: '',
    });
  }
  async createUser() {
    const user = await this.createUserService.execute({
      id: uuid(),
      nome: 'Um usuario',
      email: 'umusuario@email.com',
    });

    return user;
  }
}

export { FakeData };
