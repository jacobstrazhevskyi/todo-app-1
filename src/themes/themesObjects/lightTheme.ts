import { ThemeObject } from '../../types/ThemeObject';
import { typographyObjectForThemes } from '../../utils/objects/typographyObjectForThemes';

export const lightTheme: ThemeObject = {
  themeName: 'light',
  themeObject: {
    palette: {
      mode: 'light',
      common: {
        white: '#ffffff',
        black: '#000000',
      },
      primary: {
        main: '#673ab7',
        dark: '#482880',
        light: '#482880',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#651fff',
        dark: '#4615b2',
        light: '#834bff',
      },
      text: {
        primary: '#000000',
        secondary: '#291749',
        disabled: '#6b675a',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
    },
    ...typographyObjectForThemes,
  },
};
