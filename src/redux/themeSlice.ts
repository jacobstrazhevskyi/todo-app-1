/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localStorageKeys } from '../auxFiles/localStorageKeys';

const {
  themesKeys: {
    OSTheme,
    theme,
  },
} = localStorageKeys;

const currentOSTheme = localStorage.getItem(OSTheme) || '';
const themeNameFromLocalStorage = localStorage.getItem(theme) || '';

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
