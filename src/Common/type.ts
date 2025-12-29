import type { ReactNode } from "react"

export type ChildrenType = {
    children : ReactNode
}

export type Todo = {
     id : string;
     task : string;
     completed : boolean;
     createdAt : Date;
}

export type TodosContextType = {
     todos : Todo[],
    //  setTodos : React.Dispatch<React.SetStateAction<never[]>>;
     handleAddTodo : (todo:string) => void
          toggleTodoAsCompleted : (id:string) => void

}