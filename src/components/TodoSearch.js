import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../shared/debounce";
import { useTodoSetSearch } from "../shared/TodoContext";

const TodoSearch = () => {
  // useContext
  const setSearch = useTodoSetSearch();

  // hooks in local
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setSearch("");
  }, [isOpen, setSearch]);

  // handlers
  const onToggle = () => setIsOpen(!isOpen);
  const onChange = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  return (
    <div>
      {isOpen && <input ref={inputRef} onChange={onChange} autoFocus />}
      <button onClick={onToggle}>{isOpen ? "x" : "🔍"}</button>
    </div>
  );
};

export default TodoSearch;
