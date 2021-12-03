import React from "react";
import { useTodoSetSort } from "../shared/TodoContext";

const TodoSort = () => {
  const setSort = useTodoSetSort();
  const onSelect = (e) => setSort(e.target.value);
  return (
    <select onChange={onSelect}>
      <option value="createdAt">최신 순</option>
      <option value="description">이름 순</option>
    </select>
  );
};

export default TodoSort;
