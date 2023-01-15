import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    changeStatusTodo: (state, action) => {
      state.map((item) =>
        item.id === action.payload ? (item.status = !item.status) : item
      );
    },
  },
});

export const { addTodo, deleteTodo, changeStatusTodo } = todoSlice.actions;
