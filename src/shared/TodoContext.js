import React, {
  createContext,
  useReducer,
  useContext,
  useRef,
  useState,
} from "react";

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

// contexts
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
const TodoSearchContext = createContext();
const TodoSetSearchContext = createContext();
const TodoSortContext = createContext();
const TodoSetSortContext = createContext();
const TodoFilterContext = createContext();
const TodoSetFilterContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [filter, setFilter] = useState(false);
  const nextId = useRef(state.length + 1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          <TodoSearchContext.Provider value={search}>
            <TodoSetSearchContext.Provider value={setSearch}>
              <TodoSortContext.Provider value={sort}>
                <TodoSetSortContext.Provider value={setSort}>
                  <TodoFilterContext.Provider value={filter}>
                    <TodoSetFilterContext.Provider value={setFilter}>
                      {children}
                    </TodoSetFilterContext.Provider>
                  </TodoFilterContext.Provider>
                </TodoSetSortContext.Provider>
              </TodoSortContext.Provider>
            </TodoSetSearchContext.Provider>
          </TodoSearchContext.Provider>
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

// custom hooks
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
export const useTodoSearch = () => {
  const context = useContext(TodoSearchContext);
  if (typeof context !== "string" && !context) {
    throw new Error("Cannot find TodoSearchProvider.");
  }
  return context;
};
export const useTodoSetSearch = () => {
  const context = useContext(TodoSetSearchContext);
  if (!context) {
    throw new Error("Cannot find TodoSetSearchProvider.");
  }
  return context;
};
export const useTodoSort = () => {
  const context = useContext(TodoSortContext);
  if (!context) {
    throw new Error("Cannot find TodoSortProvider.");
  }
  return context;
};
export const useTodoSetSort = () => {
  const context = useContext(TodoSetSortContext);
  if (!context) {
    throw new Error("Cannot find TodoSetSortProvider.");
  }
  return context;
};
export const useTodoFilter = () => {
  const context = useContext(TodoFilterContext);
  if (context === undefined) {
    throw new Error("Cannot find TodoFilterProvider.");
  }
  return context;
};
export const useTodoSetFilter = () => {
  const context = useContext(TodoSetFilterContext);
  if (!context) {
    throw new Error("Cannot find TodoSetFilterProvider.");
  }
  return context;
};
