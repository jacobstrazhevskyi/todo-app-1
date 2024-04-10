import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import { TodoListPage } from '../TodoListPage';
import { EditTodoPage } from '../EditTodoPage';
import { CreateTodoPage } from '../CreateTodoPage';
import { NotFoundPage } from '../NotFoundPage';

export const AppContent: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={<TodoListPage />}
    >
      <Route
        path=":pageNumber"
        element={<TodoListPage />}
      />
    </Route>
    <Route
      path="/edit/:todoId"
      element={<EditTodoPage />}
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
