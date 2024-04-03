import React from 'react';

import uuid from 'react-uuid';

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { selectTheme } from '../../redux/themeSlice';
import { themes } from '../../themes/themes';
import { localStorageKeys } from '../../auxFiles/localStorageKeys';

import { aux } from '../../auxFiles/OSTheme';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const prepareThemeName = (selectedThemeName: string) => {
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

  const selectThemeMenuHandler = (
    event: SelectChangeEvent<unknown>,
  ) => {
    const { value } = event.target;

    dispatch(selectTheme(value as string));
  };

  const {
    themesKeys: {
      theme,
    },
  } = localStorageKeys;

  const { currentOSTheme } = aux;

  const [defaultSelectMenuValue] = useLocalStorage(theme, currentOSTheme);

  return (
    <CentredSelectMenu
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
    </CentredSelectMenu>
  );
};
