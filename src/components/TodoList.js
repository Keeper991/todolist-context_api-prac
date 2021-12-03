import React from "react";
import {
  useTodoSearch,
  useTodoSort,
  useTodoState,
} from "../shared/TodoContext";
import TodoItem from "./TodoItem";

const getSortFn = (sort) => {
  switch (sort) {
    case "createdAt":
      return (a, b) => b.createdAt - a.createdAt;
    case "description":
      return (a, b) =>
        a.description.toUpperCase() > b.description.toUpperCase() ? 1 : -1;
    default:
      throw new Error(`Unexpected sort type: ${sort}`);
  }
};

const sortByIsDone = (a, b) => {
  if (!a.isDone && b.isDone) return -1;
  if (a.isDone && !b.isDone) return 1;
  return 0;
};

const TodoList = () => {
  // contexts
  const todos = useTodoState();
  const search = useTodoSearch();
  const sort = useTodoSort();

  const cases = [search.toLowerCase(), search.toUpperCase()];

  return (
    <div>
      {todos
        .sort(getSortFn(sort))
        .sort(sortByIsDone)
        .map(
          (todo) =>
            cases.some((c) => todo.description.includes(c)) && (
              <TodoItem key={todo.id} {...todo} />
            )
        )}
    </div>
  );
};

export default TodoList;
