import { createContext, useState } from "react";
import type { ChildrenType, TodosContextType,  } from "../Common/type";

const TodosContext = createContext<TodosContextType | null>(null) ;




export const TodosProvier = ({children}:ChildrenType) => {
      const [todos,setTodos] = useState([])
       const handleAddTodo = () => {

       }


        const provierInfo = {
             todos,
             setTodos,
             handleAddTodo
        }

  return (
    <TodosContext.Provider value={provierInfo}>

        {children}
    </TodosContext.Provider>
  )
}
