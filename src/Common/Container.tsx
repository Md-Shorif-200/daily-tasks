import type { ChildrenType } from "./type"


export const Container = ({children}:ChildrenType) => {
  return (
    <div className=" w-full px-2 md:w-3xl lg:w-4xl mx-auto">
         {children}
    </div>
  )
}
