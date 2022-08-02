interface IUsuario {
  nome: string;
  email: string;
}

class CreateUserService {
  execute({ nome, email }: IUsuario) {
    const data = [];

    data.push({ nome, email });

    return data;
  }
}

export { CreateUserService };
