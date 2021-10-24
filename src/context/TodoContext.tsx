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

  const addTodo = (content: string) => setTodos((todos) =>
    [
      ...todos,
      {
        id: uuid(),
        completed: false,
        content: content
      }
    ]
  )

  const deleteTodo = (id: string) => {
    const data = todos
    const index = data.findIndex((todo) => todo.id === id)
    data.splice(index, 1)
    setTodos([...data])
  }

  const completeTodo = (id: string) => {
    const data = todos
    const index = data.findIndex((todo) => todo.id === id)
    data[index].completed = !data[index].completed
    setTodos([...data])
  }

  const clearCompletedTodos = () => {
    const data = todos.filter((todo) => todo.completed === false)
    setTodos([...data])
  }

  const values = {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    clearCompletedTodos
  }
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
