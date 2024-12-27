import { createSlice } from "@reduxjs/toolkit";

interface todos {
  label: string;
  name: string;
  dateAdded: string;
  desc: string;
}

//label name date desc

const initialState = {
  todos: [
    {
      label: "School",
      name: "Maths Assignment",
      dateAdded: "2023-10-06T15:00:00",
      desc: " task to be done before 3 pm",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: todos = {
        label: action.payload.label,
        name: action.payload.name,
        desc: action.payload.desc,
        dateAdded: action.payload.dateAdded,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: todos) => todo.name !== action.payload.name
      );
    },
    updateTodo: (state, action) => {
      const { index, updatedItem } = action.payload;

      state.todos[index] = updatedItem;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
