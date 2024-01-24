import { Theme, createTheme } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { themes } from '../utils/themes';

const OSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

localStorage.setItem('OSTheme', OSTheme);

const getTheme = (themeName: string): Theme => {
  const theme = themes.find((foundTheme) => foundTheme.themeName === themeName)
    || { themeName: '', themeObject: createTheme() };

  return createTheme(theme.themeObject);
};

const themeNameFromLocalStorage = localStorage.getItem('theme');

const initialState: Theme = themeNameFromLocalStorage
  ? getTheme(themeNameFromLocalStorage)
  : getTheme(OSTheme);

const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (_theme, action: PayloadAction<string>) => {
      const newTheme = getTheme(action.payload);

      localStorage.setItem('theme', action.payload);

      return newTheme;
    },
  },
});

export const { selectTheme } = selectedThemeSlice.actions;
export default selectedThemeSlice.reducer;
