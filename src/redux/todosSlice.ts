/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialTodos: Todo[] = [
  {
    id: 1, name: 'Buy groceries', description: 'Get milk, eggs, and bread', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 2, name: 'Read a book', description: 'Choose a novel or non-fiction', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 3, name: 'Exercise', description: 'Go for a run or do some yoga', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 4, name: 'Call a friend', description: 'Catch up on recent events', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 5, name: 'Watch a movie', description: 'Choose a genre and enjoy', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 6, name: 'Learn a new skill', description: 'Programming, cooking, or art', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 7, name: 'Plan a trip', description: 'Choose a destination and itinerary', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 8, name: 'Organize workspace', description: 'Clean desk and arrange supplies', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 9, name: 'Start a journal', description: 'Write thoughts and experiences', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 10, name: 'Cook a new recipe', description: 'Try a dish from a different cuisine', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 11, name: 'Attend a workshop', description: 'Learn new skills from experts', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 12, name: 'Create a budget', description: 'Plan expenses and savings', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 13, name: 'Play a musical instrument', description: 'Practice piano, guitar, or drums', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 14, name: 'Volunteer at a charity', description: 'Help others and make a difference', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 15, name: 'Explore a new hobby', description: 'Try painting, gardening, or photography', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 16, name: 'Complete homework', description: 'Finish assignments and study', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 17, name: 'Go for a bike ride', description: 'Explore nearby trails or parks', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 18, name: 'Write a poem', description: 'Express feelings and thoughts creatively', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 19, name: 'Research a topic', description: 'Explore a subject of interest', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 20, name: 'Practice meditation', description: 'Relax and focus the mind', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },

  {
    id: 21, name: 'Take a nap', description: 'Rest and recharge your energy', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 22, name: 'Explore a new park', description: 'Discover nature and wildlife', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 23, name: 'Try a new restaurant', description: 'Taste different cuisines and flavors', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 24, name: 'Create a vision board', description: 'Set goals and visualize success', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 25, name: 'Watch a documentary', description: 'Learn about a historical event or phenomenon', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 26, name: 'Go for a swim', description: 'Enjoy the water and exercise', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 27, name: 'Try a new hairstyle', description: 'Experiment with different looks', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 28, name: 'Visit a museum', description: 'Explore art, history, or science exhibits', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 29, name: 'Practice mindfulness', description: 'Be present and aware of the moment', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 30, name: 'Organize digital files', description: 'Clean up computer folders and files', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },

  {
    id: 31, name: 'Try a new workout', description: 'Explore different fitness routines', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 32, name: 'Attend a live concert', description: 'Experience music in a live setting', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 33, name: 'Go for a hike', description: 'Enjoy nature and scenic views', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 34, name: 'Try a new craft', description: 'Explore knitting, painting, or pottery', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 35, name: 'Plan a picnic', description: 'Pack food and enjoy outdoors', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 36, name: 'Visit a botanical garden', description: 'Explore plants and natural beauty', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 37, name: 'Create a daily routine', description: 'Plan activities for a structured day', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 38, name: 'Take a photography walk', description: 'Capture interesting sights and moments', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 39, name: 'Try a new board game', description: 'Play with friends or family', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },
  {
    id: 40, name: 'Explore a local market', description: 'Discover fresh produce and unique items', creationDate: '2024-02-20 12:34:56', modificationDate: '2024-02-20 12:34:56', completed: false,
  },

];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (todos, action: PayloadAction<Todo>) => {
      const newTodo = action.payload;

      return [
        ...todos,
        newTodo,
      ];
    },
    deleteTodo: (todos, action: PayloadAction<number>) => {
      const id = action.payload;

      return [
        ...todos.filter(todo => todo.id !== id),
      ];
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
} = todosSlice.actions;
export default todosSlice.reducer;
