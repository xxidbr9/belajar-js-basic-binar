import { ACTION_TYPE } from "../actions/user.action";

const initialState = {
  username: "",
  age: 0,
  address: "",
  picture_profile: "",
  todos: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.EDIT_USERNAME:
      return {
        ...state,
        username: action.payload
      };

    case ACTION_TYPE.ADD_TO_DO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case ACTION_TYPE.DELETE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
