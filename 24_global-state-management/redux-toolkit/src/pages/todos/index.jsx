import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { todoSelector } from "../../store/todos/todo.selector";
import { todoActions } from "../../store/todos/todo.slice";

const TodoPage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(); // document.getByID

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      completed: false,
      name: inputRef.current.value
    };
    dispatch(todoActions.addNewTodo(newTodo));
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
  const todos = useSelector(todoSelector);

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};
