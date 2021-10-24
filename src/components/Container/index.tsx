import { FC } from "react"
import { TodoType, useTodo } from "../../context/TodoContext"
import Item from "../Item"
import Form from "../Form"
import styles from "./Container.module.css"

const Container: FC = () => {
  const { todos } = useTodo()

  return (
    <div className={styles["Container"]}>
      <Form />
      <div className={styles["Container-list"]}>
        {
          todos.map((todo: TodoType) => <Item key={todo.id} todo={todo} />)
        }
      </div>
    </div>
  )
}

export default Container