import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Todo } from '../types/Todo';

const filtredTodosSlice = createSlice({
  name: 'filtredTodos',
  initialState: <Todo[]>[],
  reducers: {
    setFiltredTodos: (_todos, action: PayloadAction<Todo[]>) => action.payload,
  },
});

export const {
  setFiltredTodos,
} = filtredTodosSlice.actions;

export default filtredTodosSlice.reducer;
