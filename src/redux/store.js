import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import todoReducer from "./slices/Todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
