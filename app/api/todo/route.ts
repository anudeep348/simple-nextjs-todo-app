import { db } from "@/utils/db";

export const GET = async (requst: Request) => {
  const todos = await db.todo.findMany({});
  return Response.json({
    data: todos,
  });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  console.log(data);
  const todos = await db.todo.create({
    data,
  });

  return Response.json({
    message: todos,
  });
};
