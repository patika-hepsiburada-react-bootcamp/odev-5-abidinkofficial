import { createContext, useState, useContext, FC } from "react"
import { v4 as uuid } from "uuid"

// Default To-Do schema:
export interface TodoType {
  id: string,
  completed: boolean,
  content: string
}

// @ts-ignore
const TodoContext = createContext<TodoContext>()

export const TodoProvider: FC = ({ children }) => {
  // Some initial data to display:
  const initialTodos: TodoType[] = [
    {
      id: uuid(),
      completed: false,
      content: "A to-do"
    },
    {
      id: uuid(),
      completed: true,
      content: "Another to-do"
    },
    {
      id: uuid(),
      completed: false,
      content: "World's best to-do thing"
    }
  ]
  const [todos, setTodos] = useState<TodoType[]>([...initialTodos])

  // Basic To-Do operations:
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
