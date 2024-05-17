import React from 'react';

import uuid from 'react-uuid';

import {
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { selectTheme } from '../../redux/themeSlice';
import { themes } from '../../themes/themes';
import { localStorageKeys } from '../../auxFiles/localStorageKeys';

import { aux } from '../../auxFiles/OSTheme';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

import { aux as themeNamesAux } from '../../auxFiles/themeNames'; 

const {
  themeNames: {
    OSFollowed,
  },
} = themeNamesAux;

const prepareThemeName = (selectedThemeName: string) => {
  const themeNameSplited = selectedThemeName.split(/(?<![A-Z])(?=[A-Z])/);

  themeNameSplited.filter(word => word.toLowerCase() !== 'theme');
  const joinedThemeName = themeNameSplited.join(' ');
  const resultThemeName = joinedThemeName[0]
    .toUpperCase() + joinedThemeName.slice(1);

  return `${resultThemeName} theme`;
};

const {
  themesKeys: {
    theme,
  },
} = localStorageKeys;

export const ThemeSwitchMenu: React.FC = () => {
  const { currentOSTheme } = aux;
  
  const [defaultSelectMenuValue] = useLocalStorage(theme, currentOSTheme);

  const dispatch = useAppDispatch();

  const selectThemeMenuHandler = (
    event: SelectChangeEvent<unknown>,
  ) => {
    const { value } = event.target;

    dispatch(selectTheme(value as string));
  };

  return (
    <Select
      autoWidth
      defaultValue={defaultSelectMenuValue}
      onChange={selectThemeMenuHandler}
      variant="standard"
    >
      {themes.map(({ themeName }) => (
        <MenuItem
          value={themeName}
          key={uuid()}
        >
          {prepareThemeName(themeName)}
        </MenuItem>
      ))}

      <MenuItem
        value={OSFollowed}
        key={uuid()}
      >
        OS followed
      </MenuItem>
    </Select>
  );
};
