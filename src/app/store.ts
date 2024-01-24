import { configureStore } from '@reduxjs/toolkit';
import selectedThemeSlice from '../redux/selectedThemeSlice';

export const store = configureStore({
  reducer: {
    theme: selectedThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
