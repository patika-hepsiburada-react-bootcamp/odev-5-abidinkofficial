import { FC, useState } from "react"
import { TodoType, useTodo } from "../../context/TodoContext"
import Item from "../Item"

const Container: FC = () => {
  const { todos, addTodo } = useTodo()
  const [content, setContent] = useState<string>("")

  return (
    <div className="Container">
      <input
        type="text"
        placeholder="Add todo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="button" onClick={() => addTodo(content)}>Add</button>
      {
        todos.map((todo: TodoType) => <Item key={todo.id} todo={todo} />)
      }
    </div>
  )
}

export default Container