import type { ChildrenType } from "./type"


export const Container = ({children}:ChildrenType) => {
  return (
    <div className="w-4xl mx-auto">
         {children}
    </div>
  )
}
