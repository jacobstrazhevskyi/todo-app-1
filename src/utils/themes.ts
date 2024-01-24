import { ThemeObject } from '../types/themeObject';

export const themes: ThemeObject[] = [
  {
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
      typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
      },
    },
  },
  {
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
      typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
      },
    },
  },
];
