"use client";

import { completeTodo } from "@/utils/actions";
import { Todo } from "@prisma/client";
import { useTransition } from "react";

const Todos = ({ todo }: { todo: Todo }) => {
  const [isPendig, startTransition] = useTransition();
  return (
    <div
      className={`cursor-pointer ${
        todo.completed ? "line-through text-blue-500" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todos;
