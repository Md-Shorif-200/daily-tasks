import { useState } from "react";
import type { ChildrenType, Todo } from "../Common/type";
import { TodosContext } from "./TodosContext";

export const TodosProvier = ({ children }: ChildrenType) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
      try {
         const newTodos = localStorage.getItem('todos') ;
         return  newTodos ? JSON.parse(newTodos) as Todo[] : [];
      } catch (error) {
          console.log(error);
          
            return []
      }
  });

// add new todo

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
          localStorage.setItem('todos',JSON.stringify(newTodos))
      return newTodos;
    });
  };

  console.log("current value : ", todos);

  // ! Toggle todo
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
                localStorage.setItem('todos',JSON.stringify(newTodos))


      return newTodos;
    });
  };

  //  delete todo
  const handleDelteTodo = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id != id);
                localStorage.setItem('todos',JSON.stringify(newTodos))

      return newTodos;
    });
  };

  const provierInfo = {
    todos,
    //  setTodos,
    handleAddTodo,
    toggleTodoAsCompleted,
    handleDelteTodo,
  };

  return (
    <TodosContext.Provider value={provierInfo}>
      {children}
    </TodosContext.Provider>
  );
};
