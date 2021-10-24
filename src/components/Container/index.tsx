import { FC } from "react"
import { useTodo } from "../../context/TodoContext"
import Item from "../Item"
import { TodoType } from "../../context/TodoContext"

const Container: FC = () => {
  const { todos } = useTodo()

  return (
    <div className="Container">
      {
        todos.map((todo: TodoType) => <Item key={todo.id} todo={todo} />)
      }
    </div>
  )
}

export default Container