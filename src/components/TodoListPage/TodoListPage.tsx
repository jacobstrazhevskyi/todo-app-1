import React from 'react';

import {
  Box,
  Pagination,
  styled,
} from '@mui/material';

import { TodoAppTitle } from '../Title/Title';
import { ThemeSwitchMenu } from '../ThemeSwitchMenu';
import { TodosList } from '../TodosList/TodosList';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledBox3 = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flexStart',
  marginTop: '10px',
});

export const TodoListPage: React.FC = () => (
  <StyledBox>
    <TodoAppTitle />
    <ThemeSwitchMenu />
    <TodosList />
    <StyledBox3>
      <Pagination
        showFirstButton
        showLastButton
        shape="rounded"
      />
    </StyledBox3>
  </StyledBox>
);
