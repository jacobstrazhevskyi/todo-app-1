import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import { TodoListPage } from '../TodoListPage';
import { NotFoundPage } from '../NotFoundPage';
import { CreateTodoPage } from '../CreateTodoPage';

export const AppContent: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={<TodoListPage />}
    />
    <Route
      path="/edit/:todoId"
    />
    <Route
      path="/create"
      element={<CreateTodoPage />}
    />
    <Route 
      path="*"
      element={<NotFoundPage />}
    />
  </Routes>
);
