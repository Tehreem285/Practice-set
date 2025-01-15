import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const slice = createSlice({
    name : "todo",
    initialState,
    reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    }
  }
})

export const { addTodo, deleteTodo } = slice.actions;
export default slice.reducer;