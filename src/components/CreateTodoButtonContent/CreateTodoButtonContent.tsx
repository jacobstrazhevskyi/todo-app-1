import React from 'react';

import {
  Button,
  styled,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';

import { CustomTooltip } from '../CustomTooltip';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '200px',
  height: '50px',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CreateTodoButtonContent: React.FC = () => (

  <StyledLink to="./create">
    <CustomTooltip
      tooltipTitle="Create todo"
    >
      <StyledButton
        variant="contained"
      >
        <AddIcon />
      </StyledButton>
    </CustomTooltip>
  </StyledLink>
);
