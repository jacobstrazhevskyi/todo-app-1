/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  name: string,
};

const initialState: State = { name: '' };

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
