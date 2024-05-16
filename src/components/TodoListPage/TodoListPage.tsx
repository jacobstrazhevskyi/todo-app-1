import React from 'react';

import {
  Box,
  styled,
} from '@mui/material';

import { TodosList } from '../TodosList/TodosList';
import { TodoListPagination } from '../TodoListPagination';
import { CreateTodoButton } from '../CreateTodoButton';
import { CreateTodoFloatingButton } from '../CreateTodoFloatingButton';

const StyledBox = styled(Box)({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const TodoListPage: React.FC = () => (
  <StyledBox>
    <CreateTodoButton />
    <TodosList />
    <TodoListPagination />
    <CreateTodoFloatingButton />
  </StyledBox>
);
