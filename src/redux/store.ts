import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './themeSlice';
import todosSlice from './todosSlice';
import filtredTodosSlice from './filtredTodos';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    todos: todosSlice,
    filtredTodos: filtredTodosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
