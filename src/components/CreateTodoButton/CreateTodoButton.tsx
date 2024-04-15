import React from 'react';

import {
  ListItem,
} from '@mui/material';

import { CreateTodoButtonContent } from '../CreateTodoButtonContent';

export const CreateTodoButton: React.FC = () => (
  <ListItem>
    <CreateTodoButtonContent />
  </ListItem>
);
