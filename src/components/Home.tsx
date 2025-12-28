import { Container } from "../Common/Container"
import { AddTodo } from "./AddTodo"

export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
         <Container>
           <h1>  Todo : React + TypeScript </h1>
                    <AddTodo/>
         </Container>
    </div>
  )
}
