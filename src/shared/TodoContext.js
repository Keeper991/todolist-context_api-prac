import React, { createContext, useReducer, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    description: "component 추가하기",
    createdAt: "1638174415545",
    updatedAt: "1638174415545",
    isDone: false,
  },
  {
    id: 2,
    description: "db 만들기",
    createdAt: "1638173415545",
    updatedAt: "1638173415545",
    isDone: false,
  },
  {
    id: 3,
    description: "layout 만들기",
    createdAt: "1638172415545",
    updatedAt: "1638172415545",
    isDone: true,
  },
  {
    id: 4,
    description: "비동기처리 고려하기",
    createdAt: "1638171415545",
    updatedAt: "1638171415545",
    isDone: true,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.payload.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Unexpected action type: ${action.type}.`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(state.length + 1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoStateProvider.");
  }
  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoDispatchProvider.");
  }
  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoNextIdProvider.");
  }
  return context;
};
