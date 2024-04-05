import React from 'react';

import {
  Box,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { deleteTodo } from '../../redux/todosSlice';
import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';

type Props = {
  todoId: number,
}

export const TodoItemSecondaryAction: React.FC<Props> = ({
  todoId,
}) => {
  const dispatch = useAppDispatch();

  const handleTodoDelete = () => {
    dispatch(
      deleteTodo(todoId),
    );
  };

  return (
    <Box>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Todo Info"
      >
        <InfoIcon />
      </IconButtonWithTooltipWrapper>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Edit todo"
      >
        <EditIcon />
      </IconButtonWithTooltipWrapper>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Delete todo"
        onClick={handleTodoDelete}
      >
        <DeleteIcon />
      </IconButtonWithTooltipWrapper>
    </Box>
  );
};
