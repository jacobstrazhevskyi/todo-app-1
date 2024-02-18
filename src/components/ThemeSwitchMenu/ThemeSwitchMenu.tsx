import React from 'react';

import uuid from 'react-uuid';

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';

<<<<<<< HEAD
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
// import { useDispatch } from 'react-redux';
=======
// import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9
import { selectTheme } from '../../redux/themeSlice';
import { themes } from '../../themes/themes';

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
<<<<<<< HEAD
  const dispatch = useAppDispatch();
=======
  const dispatch = useDispatch();
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9

  const selectThemeMenuHandler = (
    event: SelectChangeEvent<unknown>,
  ) => {
    const { value } = event.target;

    dispatch(selectTheme(value as string));
  };

  return (
    <CentredSelectMenu
      autoWidth
      defaultValue={
        localStorage.getItem('theme') || localStorage.getItem('OSTheme')
      }
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
