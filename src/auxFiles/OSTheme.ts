import { aux as themeNamesAux } from './themeNames';

const {
  themeNames: {
    dark,
    light,
  },
} = themeNamesAux;

const OSThemeMatchMedia = window
  .matchMedia('(prefers-color-scheme: dark)');

const currentOSTheme: string = OSThemeMatchMedia.matches
  ? dark
  : light;

export const aux = {
  currentOSTheme,
};
