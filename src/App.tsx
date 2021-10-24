import { TodoProvider } from "./context/TodoContext";
import Container from "./components/Container";

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <Container />
      </div>
    </TodoProvider>
  )
}

export default App;
