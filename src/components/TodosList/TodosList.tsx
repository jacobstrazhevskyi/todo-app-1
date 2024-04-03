import React from 'react';

import { 
  Paper,
  styled,
} from '@mui/material';
import { TodoListContent } from '../TodoListContent/TodoListContent';

const StyledPaper = styled(Paper)({
  width: '100%',
});

export const TodosList: React.FC = () => (
  <StyledPaper>
    <TodoListContent />
  </StyledPaper>
);
