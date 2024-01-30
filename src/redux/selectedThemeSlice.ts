/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { aux } from '../utils/objects/themeKeysObject';
import { localStorageKeysObject } from '../utils/objects/localStorageKeys';

const { 
  themeNames: {
    light,
    dark,
  },
} = aux;

const {
  themesKeys: {
    OSTheme,
    theme,
  },
} = localStorageKeysObject;

const currentOSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches
  ? dark
  : light;

localStorage.setItem(OSTheme, currentOSTheme);

const themeNameFromLocalStorage = localStorage.getItem(theme);

const initialState: string = themeNameFromLocalStorage || currentOSTheme;

const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (selectedTheme, action: PayloadAction<string>) => {
      selectedTheme = action.payload;

      return selectedTheme;
    },
  },
});

export const { selectTheme } = selectedThemeSlice.actions;
export default selectedThemeSlice.reducer;
