import { createContext, useState, useContext, FC } from "react"

interface TodoType {
  id: string,
  completed: boolean,
  content: string
}

// @ts-ignore
const TodoContext = createContext<TodoContext>()

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const values = {
    todos,
    setTodos
  }
  return <TodoContext.Provider value={values}>{ children }</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
