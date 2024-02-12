import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from '../App/App';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { getTheme } from '../../utils/getTheme';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

export const MuiThemeWrapper: React.FC = () => {  
  const theme = getTheme(
    useAppSelector(state => state.theme.name),
  );
    
  const [themeFromStorage, setThemeFromStorage] = useLocalStorage('theme', theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
