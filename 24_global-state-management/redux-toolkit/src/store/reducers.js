import { combineReducers } from "redux";
import todoReducer from "./todos/todo.slice";

export const rootReducer = combineReducers({
  todoReducer
});
