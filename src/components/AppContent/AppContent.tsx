import React from 'react';

import { Box, styled } from '@mui/material';
import { TodoAppTitle } from '../Title/Title';
import { ThemeSwitchMenu } from '../ThemeSwitchMenu';
import { TodosList } from '../TodosList/TodosList';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const AppContent: React.FC = () => (
  <StyledBox>
    <TodoAppTitle />
    <ThemeSwitchMenu />
    <TodosList />
  </StyledBox>
);
