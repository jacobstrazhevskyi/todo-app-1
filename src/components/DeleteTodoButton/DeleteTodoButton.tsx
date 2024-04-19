import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import { Modal } from '../Modal';

import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { deleteTodo } from '../../redux/todosSlice';

type Props = {
  todoId: number,
};

export const DeleteTodoButton: React.FC<Props> = ({
  todoId,
}) => {
  const dispatch = useAppDispatch();

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

  return (
    <>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Delete todo"
        onClick={handleTodoDelete}
      >
        <DeleteIcon />
      </IconButtonWithTooltipWrapper>

      <Modal
        opened={modalOpen}
        confirmButtonLabel="Delete"
        handleClose={handleModalClose}
        onAccept={handleModalAccept}
        title="Are you sure you want to delete current task?"
      />
    </>
  );
};
