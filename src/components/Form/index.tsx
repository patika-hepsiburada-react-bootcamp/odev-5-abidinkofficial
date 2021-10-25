import { FC, useState } from "react"
import { useTodo } from "../../context/TodoContext"
import styles from "./Form.module.css"

const Form: FC = () => {
  const [content, setContent] = useState<string>("") // Input value for adding a new todo
  const { addTodo } = useTodo()

  return (
    <div className={styles["Form"]}>
      <input
        type="text"
        placeholder="Add todo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="button" onClick={() => {
        addTodo(content)
        setContent("")
      }}>+</button>
    </div>
  )
}

export default Form