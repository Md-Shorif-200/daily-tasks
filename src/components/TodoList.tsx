import { useSearchParams } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const { todos, toggleTodoAsCompleted, handleDelteTodo } = useTodos();

  const [searchParams] = useSearchParams();

  const todosData = searchParams.get("todos");
  console.log(todosData);
  let filterTodos = todos;

  // show active data

  if (todosData == "active") {
    const activeTodos = filterTodos.filter((todo) => todo.completed == false);
    filterTodos = activeTodos;
  }

  //  show completed data
  if (todosData == "completed") {
    const completdTodos = filterTodos.filter((todo) => todo.completed == true);
    filterTodos = completdTodos;
  }
  return (
    <div>
      {filterTodos.map((todo, index) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>
              {index + 1} : {todo.task}
            </label>

            {todo.completed && (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleDelteTodo(todo.id)}
              >
                {" "}
                Delete{" "}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
