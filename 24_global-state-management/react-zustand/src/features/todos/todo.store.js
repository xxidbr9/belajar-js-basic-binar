import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export const useTodoStore = create(
  devtools(set => ({
    todos: [],
    addNewTodo: todo => {
      set(state => ({ todos: [...state.todos, todo] }));
    }
  }))
);
