import { FC } from "react"
import { TodoType } from "../../context/TodoContext"

interface IProps {
  key: String,
  todo: TodoType
}

const Item: FC<IProps> = (props) => {
  return (
    <div className="Item">
      {props.todo.content}
    </div>
  )
}

export default Item