import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      state[index].completed = action.payload.completed;
    },

    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
