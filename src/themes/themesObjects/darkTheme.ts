import { ThemeObject } from '../../types/ThemeObject';
import { typographyObjectForThemes } from '../../utils/objects/typographyObjectForThemes';

export const darkTheme: ThemeObject = {
  themeName: 'dark',
  themeObject: {
    palette: {
      mode: 'dark',
      common: {
        white: '#ffffff',
        black: '#000000',
      },
      primary: {
        main: '#373737',
        light: '#5f5f5f',
        dark: '#262626',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#221266',
        dark: '#170c47',
        light: '#4e4184',
      },
      background: {
        default: '#121212',
        paper: '#121212',
      },
      text: {
        primary: '#ffffff',
        secondary: '#6b675a',
        disabled: '#b81d25',
      },
    },
    ...typographyObjectForThemes,
  },
};
