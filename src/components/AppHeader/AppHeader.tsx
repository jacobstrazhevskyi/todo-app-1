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

const StyledBoxForThemeSwitchMenu = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '30px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

export const AppHeader: React.FC = () => (
  <StyledBox>
    <Title
      titleText="Todo App"
    />

    <StyledBoxForThemeSwitchMenu>
      <ThemeSwitchMenu />
    </StyledBoxForThemeSwitchMenu>

  </StyledBox>
);
