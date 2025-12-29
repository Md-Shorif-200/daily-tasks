import {  useState } from "react";
import type { ChildrenType, Todo, } from "../Common/type";
import { TodosContext } from "./TodosContext";






export const TodosProvier = ({children}:ChildrenType) => {
      const [todos,setTodos] = useState<Todo[]>([])

       

       const handleAddTodo = (task:string) => {
                        setTodos((prev) => {
                             const newTodos:Todo[] = [
                                 {
                                    id : Math.random().toString(),
                                    task : task,
                                    completed : false,
                                    createdAt : new Date()
                                 },
                                 ...prev
                                 
                                ]
                                console.log("prev value : ",prev);
                                return newTodos;
                        })
       }

       console.log("current value : ",todos);


       // ! Toggle todo 
 const  toggleTodoAsCompleted = (id:string) => {
        setTodos((prev) => {
           const newTodos = prev.map(todo => {
                 if (todo.id === id ) {
                  return {...todo,completed:!todo.completed}
                 }
                 return todo
           })
            return newTodos
        })
 }

//  delete todo
 const handleDelteTodo = (id:string) => {
      setTodos((prev) => {
        const newTodos = prev.filter(todo => todo.id !=id)
         return newTodos;
       })
 }


        const provierInfo = {
             todos,
            //  setTodos,
             handleAddTodo,
             toggleTodoAsCompleted,
             handleDelteTodo
        }

  return (
    <TodosContext.Provider value={provierInfo}>

        {children}
    </TodosContext.Provider>
  )
}


