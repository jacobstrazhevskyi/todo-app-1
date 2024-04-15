import React from 'react';

import {
  Button,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';

import { CustomTooltip } from '../CustomTooltip';

export const CreateTodoButtonContent: React.FC = () => (
  <CustomTooltip
    tooltipTitle="Create todo"
  >
    <Link to="./create">
      <Button
        variant="contained"
      >
        <AddIcon />
      </Button>
    </Link>
  </CustomTooltip>
);
