import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const { todos,toggleTodoAsCompleted, handleDelteTodo,} = useTodos();

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} 
             checked={todo.completed}
             onChange={() => toggleTodoAsCompleted(todo.id) }
            />
            <label htmlFor={`todo-${todo.id}`}>
              {index + 1} : {todo.task}
            </label>

              {
                 todo.completed && (
                     <button type="button" className="cursor-pointer" onClick={() => handleDelteTodo(todo.id)} > Delete </button>
                 )
              }
          </div>
        );
      })}
    </div>
  );
};
