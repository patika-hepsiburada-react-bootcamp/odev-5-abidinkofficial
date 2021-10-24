import { FC } from "react"
import { TodoType, useTodo } from "../../context/TodoContext"

interface IProps {
  key: String,
  todo: TodoType
}

const Item: FC<IProps> = (props) => {
  const { deleteTodo, completeTodo } = useTodo()

  return (
    <div className="Item">
      <button onClick={() => completeTodo(props.todo.id)}>✔</button>
      <div>{props.todo.content} {props.todo.completed && "completed"}</div>
      <button onClick={() => deleteTodo(props.todo.id)}>X</button>
    </div>
  )
}

export default Item