import React from "react";
import {
  useTodoSearch,
  useTodoSort,
  useTodoState,
  useTodoFilter,
} from "../shared/TodoContext";
import TodoItem from "./TodoItem";
import { getSortFn } from "./TodoSort";

const TodoList = () => {
  // contexts
  const todos = useTodoState();
  const search = useTodoSearch();
  const sort = useTodoSort();
  const filter = useTodoFilter();

  const cases = [search.toLowerCase(), search.toUpperCase()];

  return (
    <div>
      {todos
        .sort(getSortFn(sort))
        .sort(getSortFn("isDone"))
        .filter((todo) => !todo.isDone || !filter)
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
