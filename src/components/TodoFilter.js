import React from "react";
import { useTodoSetFilter } from "../shared/TodoContext";

const TodoFilter = () => {
  const setFilter = useTodoSetFilter();
  const onToggle = () => setFilter((filter) => !filter);
  return (
    <label>
      <input type="checkbox" onChange={onToggle} /> 완료된 항목 숨기기
    </label>
  );
};

export default TodoFilter;
