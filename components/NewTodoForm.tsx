import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="text-red-500 border border-blue-500"
        />
        <button className="bg-red-500" type="submit">
          new Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
