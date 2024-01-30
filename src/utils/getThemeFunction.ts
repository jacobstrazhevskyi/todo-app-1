import { Theme, createTheme } from '@mui/material';
import { themes } from '../themes/themes';

export const getTheme = (targetThemeName: string): Theme => {
  const theme = themes.find(({ themeName }) => themeName === targetThemeName)
    || { themeName: '', themeObject: createTheme() };
  return createTheme(theme.themeObject);
};
