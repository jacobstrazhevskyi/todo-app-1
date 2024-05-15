import { Theme, createTheme } from '@mui/material';
import { themes } from '../themes/themes';

import { aux } from '../auxFiles/OSTheme';

import { aux as themeNamesAux } from '../auxFiles/themeNames'; 

const {
  themeNames: {
    OSFollowed,
  },
} = themeNamesAux;

export const getTheme = (targetThemeName: string): Theme => {
  const { currentOSTheme } = aux;

  let preparedTargetThemeName = targetThemeName;
  
  if (targetThemeName === OSFollowed) {
    preparedTargetThemeName = currentOSTheme;
  }

  const theme = themes.find(({ themeName }) => themeName === preparedTargetThemeName)
    || { themeName: '', themeObject: createTheme() };

  return createTheme(theme.themeObject);
};
