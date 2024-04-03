/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from '../App/App';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { getTheme } from '../../utils/getTheme';
import { localStorageKeys } from '../../auxFiles/localStorageKeys';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { selectTheme } from '../../redux/themeSlice';
import { aux as auxOSTheme } from '../../auxFiles/OSTheme';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const {
  currentOSTheme,
} = auxOSTheme;

const {
  themesKeys: {
    theme,
  },
} = localStorageKeys;

export const MuiThemeWrapper: React.FC = () => {
  const themeName = useAppSelector(state => state.theme.name);
  const dispatch = useAppDispatch();

  const [
  
    themeNameFromLocalStorage,
    setThemeNameFromLocalStorage,
  
  ] = useLocalStorage(theme, themeName);

  useEffect(() => {
    setThemeNameFromLocalStorage(themeName);
  }, [themeName]);

  useEffect(() => {
    dispatch(
      selectTheme(
        themeNameFromLocalStorage || currentOSTheme,
      ),
    );
  }, []);

  const selectedTheme = getTheme(themeName);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
