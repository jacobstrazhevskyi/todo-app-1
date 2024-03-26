import React from 'react';

import {
  Box,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { CustomTooltip } from '../CustomTooltip';

export const TodoItemSecondaryAction: React.FC = () => (
  <Box>
    <CustomTooltip tooltipTitle="Todo info">
      <IconButton>
        <InfoIcon />
      </IconButton>
    </CustomTooltip>
    <CustomTooltip tooltipTitle="Edit todo">
      <IconButton>
        <EditIcon />
      </IconButton>
    </CustomTooltip>
    <CustomTooltip tooltipTitle="Delete todo">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </CustomTooltip>
  </Box>
);
