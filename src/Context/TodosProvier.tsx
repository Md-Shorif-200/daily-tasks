import { createContext, useContext, useState } from "react";
import type { ChildrenType, Todo, TodosContextType,  } from "../Common/type";

 const TodosContext = createContext<TodosContextType | null>(null) ;




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


        const provierInfo = {
             todos,
            //  setTodos,
             handleAddTodo
        }

  return (
    <TodosContext.Provider value={provierInfo}>

        {children}
    </TodosContext.Provider>
  )
}



export const useTodos = () => {
     const  todosConsumer =  useContext(TodosContext)
       if(!todosConsumer){
        throw new Error('someThing is Wrong')
       }
  return todosConsumer 
}