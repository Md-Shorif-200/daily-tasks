import { createContext } from "react";
import type { TodosContextType } from "../Common/type";

export const TodosContext = createContext<TodosContextType | null>(null);
