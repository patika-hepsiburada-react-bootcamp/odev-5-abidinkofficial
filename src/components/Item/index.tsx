import { FC } from "react"
import { TodoType, useTodo } from "../../context/TodoContext"
import styles from "./Item.module.css"

interface IProps {
  key: String,
  todo: TodoType
}

const Item: FC<IProps> = (props) => {
  const { deleteTodo, completeTodo } = useTodo()

  return (
    <div className={styles["Item"]}>
      <button className={styles["Item-complete"]} onClick={() => completeTodo(props.todo.id)}>{props.todo.completed && "✔"}</button>
      <div className={`${styles["Item-content"]} ${props.todo.completed ? styles["Item-content-completed"] : ""}`}>{props.todo.content}</div>
      <button className={styles["Item-delete"]} onClick={() => deleteTodo(props.todo.id)}>❌</button>
    </div>
  )
}

export default Item