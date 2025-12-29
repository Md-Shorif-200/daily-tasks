import { useContext } from "react"
import { TodosContext } from "../Context/TodosContext"

export const useTodos = () => {
     const  todosConsumer =  useContext(TodosContext)
       if(!todosConsumer){
        throw new Error('someThing is Wrong')
       }
  return todosConsumer 
}