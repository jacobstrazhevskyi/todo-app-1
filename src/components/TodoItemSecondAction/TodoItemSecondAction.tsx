import React, { useState } from 'react';

import {
  Box,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { deleteTodo } from '../../redux/todosSlice';
import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';
import { AcceptingModal } from '../AcceptingModal';

type Props = {
  todoId: number,
}

export const TodoItemSecondaryAction: React.FC<Props> = ({
  todoId,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleModalAccept = () => {
    dispatch(
      deleteTodo(todoId),
    );
  };

  const handleTodoDelete = () => {
    handleModalOpen();
  };

  const handleTodoEdit = () => {
    navigate(`edit/${todoId}`);
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
        onClick={handleTodoEdit}
      >
        <EditIcon />
      </IconButtonWithTooltipWrapper>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Delete todo"
        onClick={handleTodoDelete}
      >
        <DeleteIcon />
      </IconButtonWithTooltipWrapper>
      <AcceptingModal
        opened={modalOpen}
        acceptButtonLabel="Delete"
        handleClose={handleModalClose}
        onAccept={handleModalAccept}
        isWarning
        title="Are you sure you want to delete current task?"
      />
    </Box>
  );
};
