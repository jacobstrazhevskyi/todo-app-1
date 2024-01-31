import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from './App';
import { useAppSelector } from '../app/hooks/useAppSelector';
import { getTheme } from '../utils/getThemeFunction';

export const MuiThemeWrapper: React.FC = () => {
  const theme = getTheme(
    useAppSelector(state => state.theme.name),
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
