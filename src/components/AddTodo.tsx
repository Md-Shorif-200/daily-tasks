import React, { useState } from "react"
import { useTodos } from "../hooks/useTodos"

export const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const { handleAddTodo } = useTodos()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo.trim()) return
    handleAddTodo(todo)
    setTodo("")
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Add +
      </button>
    </form>
  )
}
