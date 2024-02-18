/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from '../App/App';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { getTheme } from '../../utils/getTheme';
import { localStorageKeys } from '../../auxFiles/localStorageKeys';

// import useLocalStorage from '../../utils/hooks/useLocalStorage';

const {
  themesKeys: {
    OSTheme,
  },
} = localStorageKeys;

const OSThemeMatchMedia = window
  .matchMedia('(prefers-color-scheme: dark)');

export const MuiThemeWrapper: React.FC = () => {
  const themeName = useAppSelector(state => state.theme.name);

  // const [themeNameFromStorage, setThemeNameFromStorage] = useLocalStorage('theme', themeName);
  
  useEffect(() => {
    localStorage.setItem('theme', themeName);
    // setThemeNameFromStorage(themeName);
  }, [themeName]);

  useEffect(() => {
    const currentOSTheme = OSThemeMatchMedia.matches
      ? 'dark' 
      : 'light';

    localStorage.setItem(OSTheme, currentOSTheme);
  }, [OSThemeMatchMedia]);
  
  const theme = getTheme(themeName);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
