import React from 'react';

import {
  Box,
  styled,
} from '@mui/material';

import { TodosList } from '../TodosList/TodosList';
import { TodoListPagination } from '../TodoListPagination';
import { CreateTodoButton } from '../CreateTodoButton';

const StyledBox = styled(Box)({
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
  </StyledBox>
);
