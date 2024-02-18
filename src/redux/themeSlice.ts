/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { localStorageKeys } from '../auxFiles/localStorageKeys';
=======
import { aux } from '../utils/objects/themeKeys';
import { localStorageKeysObject } from '../utils/objects/localStorageKeys';

const { 
  themeNames: {
    light,
    dark,
  },
} = aux;
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9

const {
  themesKeys: {
    OSTheme,
    theme,
  },
<<<<<<< HEAD
} = localStorageKeys;

const currentOSTheme = localStorage.getItem(OSTheme) || '';
const themeNameFromLocalStorage = localStorage.getItem(theme) || '';
=======
} = localStorageKeysObject;

const currentOSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches
  ? dark
  : light;

localStorage.setItem(OSTheme, currentOSTheme);

const themeNameFromLocalStorage = localStorage.getItem(theme);
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9

type State = {
  name: string,
};

const initialState: State = { name: themeNameFromLocalStorage || currentOSTheme };

const themeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (selectedTheme, action: PayloadAction<string>) => {
      selectedTheme.name = action.payload;
    },
  },
});

export const { selectTheme } = themeSlice.actions;
export default themeSlice.reducer;
