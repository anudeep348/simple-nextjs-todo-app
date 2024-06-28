import { Todo } from "@prisma/client";
import Todos from "./Todo";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todos todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
