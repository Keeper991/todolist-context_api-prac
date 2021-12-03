import TodoCreate from "./components/TodoCreate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodoSort from "./components/TodoSort";
import { TodoProvider } from "./shared/TodoContext";
import TodoTemplate from "./templates/TodoTemplate";

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHeader />
        <TodoSearch />
        <TodoCreate />
        <TodoSort />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
