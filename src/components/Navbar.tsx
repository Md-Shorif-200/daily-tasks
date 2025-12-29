import { Link, useSearchParams } from "react-router-dom"

export const Navbar = () => {
  const [searchParams] = useSearchParams()
  const active = searchParams.get("todos")

  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition"
  const activeStyle =
    "bg-blue-600 text-white"
  const normalStyle =
    "text-slate-600 hover:bg-slate-100"

  return (
    <div className="flex justify-center gap-2">
      <Link
        to="/"
        className={`${base} ${!active ? activeStyle : normalStyle}`}
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className={`${base} ${
          active === "active" ? activeStyle : normalStyle
        }`}
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={`${base} ${
          active === "completed" ? activeStyle : normalStyle
        }`}
      >
        Completed
      </Link>
    </div>
  )
}
