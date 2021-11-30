import React from "react";
import { useTodoDispatch } from "../shared/TodoContext";

const TodoItem = ({ id, description, isDone }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", payload: { id } });
  const onRemove = () => dispatch({ type: "REMOVE", payload: { id } });
  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      <span>{description}</span>
      <button onClick={onRemove}>🗑</button>
    </div>
  );
};

export default React.memo(TodoItem);
