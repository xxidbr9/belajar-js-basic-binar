import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    addNewTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    }
  }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
