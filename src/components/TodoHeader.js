import React from "react";
import { useTodoState } from "../shared/TodoContext";

const TodoHeader = () => {
  const todos = useTodoState();
  return (
    <div>
      {todos.filter((todo) => !todo.isDone).length}/{todos.length}개
    </div>
  );
};

export default TodoHeader;
