import { useSearchParams } from "react-router-dom"
import { useTodos } from "../hooks/useTodos"

export const TodoList = () => {
  const { todos, toggleTodoAsCompleted, handleDelteTodo } = useTodos()
  const [searchParams] = useSearchParams()

  const todosData = searchParams.get("todos")
  let filterTodos = todos

  if (todosData === "active") {
    filterTodos = filterTodos.filter((todo) => !todo.completed)
  }

  if (todosData === "completed") {
    filterTodos = filterTodos.filter((todo) => todo.completed)
  }

  return (
    <div className=" min-h-[40vh] space-y-3">
      {filterTodos.length === 0 && (
        <p className="text-center text-slate-500 text-sm">
          No tasks found
        </p>
      )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {filterTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="h-4 w-4 accent-blue-600 cursor-pointer"
            />
            <span
              className={`text-sm ${
                todo.completed
                  ? "line-through text-slate-400"
                  : "text-slate-800"
              }`}
            >
              {todo.task}
            </span>
          </div>

          {todo.completed && (
            <button
              onClick={() => handleDelteTodo(todo.id)}
              className="text-sm text-red-600 hover:text-red-700 transition"
            >
              Delete
            </button>
          )}
        </div>
      ))}
        </div>


    </div>
  )
}
