export const ACTION_TYPE = {
  EDIT_USERNAME: "EDIT_USERNAME",
  REMOVE_USER: "REMOVE_USER",
  ADD_TO_DO: "ADD_TODO",
  DELETE_TO_DO: "DELETE_TODO",
  EDIT_TO_DO: "EDIT_TODO"
};

export const addTodo = todo => {
  return {
    type: ACTION_TYPE.ADD_TO_DO,
    payload: todo
  };
};
