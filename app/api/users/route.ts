import { createUser, listUsers } from "../../../lib/helper-user"; // importando uma funcao para dentro dessa rota

export async function GET() {
  // estou mandando pra fora aqui eu to dizendo pegue a minha resposta(Response.json) que tem o parametro users ou seja quando chegar la vai retornar tudo o que tem dentro de users
  return Response.json({ users: listUsers() });
}

export async function POST(request: Request) {
  // quando a requisição chegar, vou pegar os dados enviados e transformar em um objeto JavaScript armazenado em body
  const body = await request.json();

  if (!body.name || !body.email) {
    //se o meu nome ou meu email nao exister aconteca algo no caso erro
    return Response.json(
      { error: "Name e email são obrigadórios" },
      { status: 400 },
    );
  }

  const user = createUser(body); // criando minha variavel com uma funcao com o parametro body caso eu use outro parametro na minha funcao no meu outro componente ele vai receber tudo o que esta no parametro aqui exempplo meu body é meu parametro aqui se eu usar um createUser(data) no meu outro componente o data vai receber todos os dados do body daqui

  return Response.json({ user }, { status: 201 }); // retornando a o user
}
