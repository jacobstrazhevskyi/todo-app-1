import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialTodos: Todo[] = [
  {
    id: 1,
    name: 'cook dinner',
    description: 'make a cake',
    creationDate: '2024-02-20 12:34:56',
    modificationDate: '2024-02-20 12:34:56',
  },
  {
    id: 2,
    name: 'clean the house',
    description: 'vacuum and dust all rooms',
    creationDate: '2024-02-20 12:34:56',
    modificationDate: '2024-02-20 12:34:56',
  },
  {
    id: 3,
    name: 'go for a walk',
    description: 'enjoy the fresh air and nature',
    creationDate: '2024-02-20 12:34:56',
    modificationDate: '2024-02-20 12:34:56',
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (todos, action: PayloadAction<Todo>) => {
      const newTodo = action.payload;

      todos.push(newTodo);
    },
    deleteTodo: (todos, action: PayloadAction<number>) => {
      const id = action.payload;

      todos.splice(id - 1, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
