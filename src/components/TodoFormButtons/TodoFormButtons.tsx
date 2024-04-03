/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { addTodo } from '../../redux/todosSlice';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { AcceptingModal } from '../AcceptingModal';

const StyledBox2 = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  width: '100%',
});

type Props = {
  buttonLabel: string,
  todoName: string,
  todoDescription: string,
  isTodoCreation: boolean,
  setInputError: (value: boolean) => void,
  setInputErrorText: (value: string) => void,
};

export const TodoFormButtons: React.FC<Props> = ({
  buttonLabel,
  todoDescription,
  todoName,
  isTodoCreation,
  setInputError,
  setInputErrorText,
}) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);
  const navigate = useNavigate();

  const [modalOpened, setModalOpened] = useState(false);

  const checkForErrors = () => {
    if (!todoName.length) {
      setInputError(true);
      setInputErrorText('Empty entry');
    }
  };

  const creationHandler = () => {
    checkForErrors();
    
    if (!todoName.length) {
      return;
    }

    const formattedDate = new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    dispatch(addTodo({
      id: todos.length + 1,
      name: todoName,
      description: todoDescription,
      creationDate: formattedDate,
      modificationDate: formattedDate,
    }));

    navigate(-1);
  };

  const buttonHandler = () => {
    if (isTodoCreation) {
      creationHandler();
    } else {
      return;
    }
  };

  const modalAcceptHandler = () => {    
    navigate(-1);
  };

  const handleModalOpen = () => setModalOpened(true);
  const handleModalClose = () => setModalOpened(false);

  const cancelButtonHandler = () => {
    handleModalOpen();
  };

  return (
    <StyledBox2>
      <Button
        onClick={cancelButtonHandler}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        onClick={buttonHandler}
      >
        {buttonLabel}
      </Button>
      <AcceptingModal
        opened={modalOpened}
        handleClose={handleModalClose}
        title="Are you sure you want to discard your current task?"
        acceptButtonLabel="Discard"
        onAccept={modalAcceptHandler}
        isWarning
      />
    </StyledBox2>
  );
};
