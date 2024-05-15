import React from 'react';

import {
  Box,
  ListItem,
  Typography,
  styled,
} from '@mui/material';

import { TodosSorting } from '../TodosSorting/TodosSorting';
import { TodosFilters } from '../TodosFilters';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  marginBottom: '10px',
  gap: '15px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const TodosSortingAndFiltering: React.FC = () => (
  <StyledListItem>
    <StyledBox>
      <Typography>
        Sort by:
      </Typography>

      <TodosSorting />
    </StyledBox>
    <StyledBox>
      <Typography>
        Filter by:
      </Typography>

      <TodosFilters />
    </StyledBox>
  </StyledListItem>
);
