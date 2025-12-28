import type { ReactNode } from "react"

export type ChildrenType = {
    children : ReactNode
}

type Todo = {
     id : number;
     task : string;
     completed : boolean;
     createdAt : Date;
}

export type TodosContextType = {
     todos : Todo[],
     setTodos : React.Dispatch<React.SetStateAction<never[]>>;
     handleAddTodo : (todo:string) => void


}