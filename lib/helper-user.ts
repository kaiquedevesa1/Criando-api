import { v4 as uuidv4 } from "uuid";

interface RequestPost {
  name: string;
  email: string;
}

interface RequestPut {
  name?: string;
  email?: string;
}

export function listUsers() {
  return users;
}

const users = [
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
  const user = {
    id: uuidv4(),
    name: body.name,
    email: body.email,
  };

  users.push(user);

  return user;
}

function findUserById(id: string) {
  return users.find((user) => user.id === id);
}

export function updateUser(id: string, body: RequestPut) {
  const user = findUserById(id);

  if (!user) {
    return null;
  }

  user.name = body.name ?? user.name;
  user.email = body.email ?? user.email;

  return user;
}
