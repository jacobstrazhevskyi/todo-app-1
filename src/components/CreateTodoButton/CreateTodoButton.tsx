import React from 'react';

import {
  ListItem,
  styled,
} from '@mui/material';

import { CreateTodoButtonContent } from '../CreateTodoButtonContent';

const StyledListItem = styled(ListItem)({
  width: '100%',
  paddingLeft: '0',
  paddingRight: '0',
  marginBottom: '10px',
});

export const CreateTodoButton: React.FC = () => (
  <StyledListItem>
    <CreateTodoButtonContent />
  </StyledListItem>
);
