import React from 'react';

import {
  Box,
  styled,
} from '@mui/material';

import { ThemeSwitchMenu } from '../ThemeSwitchMenu';
import { Title } from '../Title';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
});

export const AppHeader: React.FC = () => (
  <StyledBox>
    <Title 
      titleText="Todo App"
    />
    <ThemeSwitchMenu />
  </StyledBox>
);
