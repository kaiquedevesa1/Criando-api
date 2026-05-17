import { updateUser } from "@/lib/helper-user";

export async function PUT(request: Request, { params }) {
  const { id } = params;

  const body = await request.json();

  const user = updateUser(id as string, body);

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ user });
}
