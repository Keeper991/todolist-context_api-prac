import React, { useRef, useState } from "react";
import { useTodoDispatch, useTodoNextId } from "../shared/TodoContext";

const TodoCreate = () => {
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onToggle = () => setIsOpen(!isOpen);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      payload: {
        todo: {
          id: nextId.current++,
          description: inputRef.current.value,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isDone: false,
        },
      },
    });
    inputRef.current.value = "";
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {isOpen && <input ref={inputRef} autoFocus />}
      </form>
      <button onClick={onToggle}>{isOpen ? "x" : "+"}</button>
    </div>
  );
};

export default TodoCreate;
