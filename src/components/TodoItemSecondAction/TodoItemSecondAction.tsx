import React from 'react';

import {
  Box,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

import { CustomTooltip } from '../CustomTooltip';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { deleteTodo } from '../../redux/todosSlice';

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
        <IconButton
          onClick={handleTodoDelete}
        >
          <DeleteIcon />
        </IconButton>
      </CustomTooltip>
    </Box>
  );
};
