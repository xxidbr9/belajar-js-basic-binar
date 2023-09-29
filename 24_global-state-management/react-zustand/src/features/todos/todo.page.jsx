import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { useTodoStore } from "./todo.store";

const TodoPage = () => {
  const inputRef = useRef(); // document.getByID

  const addNewTodo = useTodoStore((state) => state.addNewTodo)

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      completed: false,
      name: inputRef.current.value
    };
    addNewTodo(newTodo)
  };

  return (
    <div>
      <div>
        <input ref={inputRef} placeholder='New todo here' />
        <button onClick={handleAddTodo}>Add New Todo</button>
      </div>
      <div>
        <ListTodo />
      </div>
    </div>
  );
};

export default TodoPage;

const ListTodo = () => {
  const todos = useTodoStore((state) => state.todos)
  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};
