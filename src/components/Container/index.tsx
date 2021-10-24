import { FC, useState, useEffect } from "react"
import { TodoType, useTodo } from "../../context/TodoContext"
import Item from "../Item"
import Form from "../Form"
import styles from "./Container.module.css"

const Container: FC = () => {
  const { todos, clearCompletedTodos } = useTodo()
  const [leftCount, setLeftCount] = useState<number>(0)
  const [status, setStatus] = useState<string>("all")

  useEffect(() => {
    let count = 0
    todos.map((todo: TodoType) => !todo.completed && count++)
    setLeftCount(count)
  }, [todos])

  return (
    <div className={styles["Container"]}>
      <Form />
      <div className={styles["Container-list"]}>
        { status === "all" && todos.map((todo: TodoType) => <Item key={todo.id} todo={todo} />) }
        { status === "active" && todos.map((todo: TodoType) => !todo.completed && <Item key={todo.id} todo={todo} />) }
        { status === "completed" && todos.map((todo: TodoType) => todo.completed && <Item key={todo.id} todo={todo} />) }
      </div>
      <div className={styles["Container-bottom"]}>
        <div>{`${leftCount} items left.`}</div>
        <div>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value={"all"}>All</option>
            <option value={"active"}>Active</option>
            <option value={"completed"}>Completed</option>
          </select>
        </div>
        <button onClick={clearCompletedTodos}>Clear completed</button>
      </div>
    </div>
  )
}

export default Container