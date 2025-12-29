import { Container } from "../Common/Container";
import { AddTodo } from "./AddTodo";
import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { MdOutlineAddTask } from "react-icons/md";

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <Container>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200  space-y-6">
          <div className="flex items-center justify-center gap-2 bg-blue-500 py-3" >
            <MdOutlineAddTask className="text-3xl text-white font-bold" />
            <h1 className="text-white text-xl font-semibold">
               Daily Tasks
            </h1>
          </div>

          <div className="px-6">
               <Navbar />
                  <div className="my-3">
                     <AddTodo  />
                  </div>
          <TodoList />
          </div>
        </div>
      </Container>
    </div>
  );
};
