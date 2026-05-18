import { deleteUser, updateUser } from "@/lib/helper-user";

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;

  const body = await request.json();

  const user = updateUser(id, body);

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ message: "Usuario Alterado", user });
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;

  const user = deleteUser(id as string);

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ message: "Usuario removido", user });
}
