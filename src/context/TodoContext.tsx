import { createContext, useState, useContext, FC } from "react"
import { v4 as uuid } from "uuid"

export interface TodoType {
  id: string,
  completed: boolean,
  content: string
}

// @ts-ignore
const TodoContext = createContext<TodoContext>()

export const TodoProvider: FC = ({ children }) => {
  const initialTodos: TodoType[] = [
    {
      id: uuid(),
      completed: false,
      content: "Todo 1"
    },
    {
      id: uuid(),
      completed: true,
      content: "Todo 2"
    },
    {
      id: uuid(),
      completed: false,
      content: "Todo 3"
    }
  ]
  const [todos, setTodos] = useState<TodoType[]>([...initialTodos])

  const values = {
    todos,
    setTodos
  }
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
