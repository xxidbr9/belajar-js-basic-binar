import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../store/actions/user.action";
import { userTodoSelector } from "../../store/selectors/user.selector";
const UserPage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(); // document.getByID

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      completed: false,
      name: inputRef.current.value
    };
    dispatch(addTodo(newTodo));
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

export default UserPage;

const ListTodo = () => {
  const todos = useSelector(userTodoSelector);

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};
