import React from 'react';

import {
  Box,
  styled,
} from '@mui/material';

import { TodoAppTitle } from '../Title/Title';
import { ThemeSwitchMenu } from '../ThemeSwitchMenu';
import { TodosList } from '../TodosList/TodosList';
import { TodoListPagination } from '../TodoListPagination';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const TodoListPage: React.FC = () => (
  <StyledBox>
    <TodoAppTitle />
    <ThemeSwitchMenu />
    <TodosList />
    <TodoListPagination />
  </StyledBox>
);
