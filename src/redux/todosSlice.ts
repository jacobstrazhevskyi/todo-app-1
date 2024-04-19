/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialTodos: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    setTodos: (_todos, action: PayloadAction<Todo[]>) => action.payload,
    addTodo: (todos, action: PayloadAction<Todo>) => {
      const newTodo = action.payload;

      return [
        ...todos,
        newTodo,
      ];
    },
    deleteTodo: (todos, action: PayloadAction<number>) => {
      const id = action.payload;
    
      const currentTodos = todos.filter(todo => todo.id !== id);
    
      const resultTodos = currentTodos.map((todo, index) => ({
        ...todo,
        id: index + 1,
      }));
    
      return resultTodos;
    },
    toggleCompletedStatus: (todos, action: PayloadAction<number>) => {
      const id = action.payload;
      const todoIndex = todos.findIndex(todo => todo.id === id);

      if (todoIndex === -1) {
        return todos;
      }

      const updatedTodo = {
        ...todos[todoIndex],
        completed: !todos[todoIndex].completed,
      };

      return [
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
      ];
    },
    editTodo: (todos, action: PayloadAction<Todo>) => {
      const todoToEdit = action.payload;
      const todoIndex = todos.findIndex(todo => todo.id === todoToEdit.id);

      if (todoIndex === -1) {
        return todos;
      }

      const updatedTodo = {
        ...todoToEdit,
      };

      return [
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
      ];
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleCompletedStatus,
  editTodo,
  setTodos,
} = todosSlice.actions;
export default todosSlice.reducer;
