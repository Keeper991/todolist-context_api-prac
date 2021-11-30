import TodoCreate from "./components/TodoCreate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./shared/TodoContext";
import TodoTemplate from "./templates/TodoTemplate";

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
