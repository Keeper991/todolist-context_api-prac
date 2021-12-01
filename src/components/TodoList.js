import React from "react";
import { useTodoSearch, useTodoState } from "../shared/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // contexts
  const todos = useTodoState();
  const search = useTodoSearch();

  const cases = [search.toLowerCase(), search.toUpperCase()];

  return (
    <div>
      {todos.map(
        (todo) =>
          cases.some((c) => todo.description.includes(c)) && (
            <TodoItem key={todo.id} {...todo} />
          )
      )}
    </div>
  );
};

export default TodoList;
