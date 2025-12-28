import React, { useState } from "react"

export const AddTodo = () => {
     const [todo,setTodo] = useState('') ;
      console.log(todo);

      const handleFormSubmit = (e:React.FormEvent) => {
               e.preventDefault();
               handleAddTodo(todo);
               setTodo('')
      }


      
  return (
    <div>
         <form action="" onSubmit={handleFormSubmit}>
              <input type="text" name="" id="" className="border border-cyan-500" value={todo} onChange={(e) => setTodo(e.target.value)} />
               <button type="submit">add</button>
         </form>
    </div>
  )
}
