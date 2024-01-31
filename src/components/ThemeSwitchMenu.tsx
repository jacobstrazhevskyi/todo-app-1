import React from 'react';

import uuid from 'react-uuid';

import {
  MenuItem,
  Select,
  styled,
} from '@mui/material';

import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { selectTheme } from '../redux/selectedThemeSlice';
import { themes } from '../themes/themes';
import { store } from '../app/store';

import { localStorageKeysObject } from '../utils/objects/localStorageKeys';

const { 
  themesKeys: {
    theme,
  },
} = localStorageKeysObject;

const localStorageThemeSubscriber = () => {
  const state = store.getState();

  localStorage.setItem(theme, state.theme.name);
};

const unsubscribe = store.subscribe(localStorageThemeSubscriber); // For later (maybe)

const getMenuItemText = (selectedThemeName: string) => {
  const themeNameSplited = selectedThemeName.split(/(?<![A-Z])(?=[A-Z])/);

  themeNameSplited.filter(word => word.toLowerCase() !== 'theme');
  const joinedThemeName = themeNameSplited.join(' ');
  const resultThemeName = joinedThemeName[0]
    .toUpperCase() + joinedThemeName.slice(1);

  return `${resultThemeName} theme`;
};

const CentredSelectMenu = styled(Select)({
  margin: '0 auto',
});

export const ThemeSwitchMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <CentredSelectMenu
      autoWidth
      defaultValue={
        localStorage.getItem('theme') || localStorage.getItem('OSTheme')
      }
      onChange={(event) => {
        dispatch(selectTheme(event.target.value as string));
      }}
      variant="standard"
    >
      {themes.map((themeFromStorage) => (
        <MenuItem
          value={themeFromStorage.themeName}
          key={uuid()}
        >
          {getMenuItemText(themeFromStorage.themeName)}
        </MenuItem>
      ))}
    </CentredSelectMenu>
  );
};
