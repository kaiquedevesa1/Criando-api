import { v4 as uuidv4 } from "uuid"; // usando a biblioteca uuid para gerar IDs únicos

interface RequestPost {
  // interface usada para definir o formato do corpo da requisição para criar um usuário
  name: string;
  email: string;
}

interface RequestPut {
  // interface usada para definir o formato do corpo da requisição para atualizar um usuário, onde os campos são opcionais
  name?: string;
  email?: string;
}

export function listUsers() {
  // Função usada para retornar o users e usar em outro componente
  return users;
}

const users = [
  // array de usuarios
  {
    id: "ee628afa-4f2d-4454-83f6-07db8d370aa9",
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: "247b40f1-713c-468f-8009-3fed19044107",
    name: "Jane Smith",
    email: "jane@example.com",
  },
];

export function createUser(body: RequestPost) {
  // Função usada pra criar um usuario
  const user = {
    id: uuidv4(),
    name: body.name,
    email: body.email,
  };

  users.push(user); // usado para mandar o usario do user para o array de users

  return user; // para mostrar o usuario criado retornando user
}

function findUserById(id: string) {
  return users.find((user) => user.id === id); // buscando o id do usuario com o (users.find)  o find vai buscar no meu array users o id se o usario for igual da const user do create user ele retorna se nao ele é undefined
}

export function updateUser(id: string, body: RequestPut) {
  const user = findUserById(id); //atribuindo a const user a funcao findUserById passando parametro id para atualizar

  if (!user) {
    // se nao existir user ele vai retornar null
    return null;
  }

  user.name = body.name ?? user.name; // user.name vai receber o valor de body.name caso nao receba nada ele continua a mesma coisa
  user.email = body.email ?? user.email;

  return user; //retorna o usuario atualizado
}

export function deleteUser(id: string) {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  const [removedUser] = users.splice(userIndex, 1);

  return removedUser;
}
