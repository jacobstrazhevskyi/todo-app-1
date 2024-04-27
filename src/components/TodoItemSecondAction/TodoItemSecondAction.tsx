import React from 'react';

import {
  Box,
  styled,
} from '@mui/material';

import { DeleteTodoButton } from '../DeleteTodoButton';
import { EditTodoButton } from '../EditTodoButton';

type Props = {
  todoId: number,
}

const StyledBox = styled(Box)({
  opacity: 0,
  transition: 'opacity .2s',
});

export const TodoItemSecondaryAction: React.FC<Props> = ({
  todoId,
}) => (
  <StyledBox
    className="todo-item-secondary-actions"
  >
    <EditTodoButton
      todoId={todoId}
    />
    <DeleteTodoButton
      todoId={todoId}
    />
  </StyledBox>
);
