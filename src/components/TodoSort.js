import React from "react";
import { useTodoSetSort } from "../shared/TodoContext";

const TodoSort = () => {
  const setSort = useTodoSetSort();
  const onSelect = (e) => setSort(e.target.value);
  return (
    <select onChange={onSelect}>
      <option value="createdAt">최신 순</option>
      <option value="description">내용 순</option>
    </select>
  );
};

export default TodoSort;

export const getSortFn = (sort) => {
  switch (sort) {
    case "createdAt":
      return (a, b) => b.createdAt - a.createdAt;
    case "description":
      return (a, b) =>
        a.description.toUpperCase() > b.description.toUpperCase() ? 1 : -1;
    case "isDone":
      return (a, b) => {
        if (!a.isDone && b.isDone) return -1;
        if (a.isDone && !b.isDone) return 1;
        return 0;
      };
    default:
      throw new Error(`Unexpected sort type: ${sort}`);
  }
};
