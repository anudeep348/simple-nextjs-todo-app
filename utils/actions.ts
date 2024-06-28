"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { Todo } from "@prisma/client";

export const newTodo = async (formData: FormData) => {
  const addTodo = await db.todo.create({
    data: {
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/todos");
};

export const completeTodo = async (id: Todo["id"]) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
