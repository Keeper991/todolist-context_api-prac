import React from "react";
import { useTodoState } from "../shared/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
