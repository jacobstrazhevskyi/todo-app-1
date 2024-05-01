import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import { Modal } from '../Modal';

import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { deleteTodo } from '../../redux/todosSlice';

import { modalAux } from '../../auxFiles/modalAux';

const {
  titles: {
    confirmDeleteTitle,
  },
  buttonsLables: {
    deleteLabel,
  },
} = modalAux;

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
        confirmButtonLabel={deleteLabel}
        handleClose={handleModalClose}
        onAccept={handleModalAccept}
        title={confirmDeleteTitle}
      />
    </>
  );
};
