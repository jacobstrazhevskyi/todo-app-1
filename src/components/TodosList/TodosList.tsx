import React from 'react';

import { 
  Paper,
  styled,
} from '@mui/material';

import { TodoListContent } from '../TodoListContent';

const StyledPaper = styled(Paper)({
  width: '100%',
  paddingTop: '10px',
});

export const TodosList: React.FC = () => (
  <StyledPaper>
    <TodoListContent />
  </StyledPaper>
);
