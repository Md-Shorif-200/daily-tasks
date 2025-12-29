import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
         {/* all todos */}
           <Link to='/'> All</Link>
           <Link to='/?todos=active'>Active</Link>
           <Link to='/?todos=completed'> completed</Link>
    </div>
  )
}
