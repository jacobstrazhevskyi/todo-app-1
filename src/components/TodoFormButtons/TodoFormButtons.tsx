/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Box,
  Button,
  styled,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { addTodo, editTodo } from '../../redux/todosSlice';

import { AcceptingModal } from '../AcceptingModal';

const StyledBox = styled(Box)({
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

  const { todoId } = useParams();

  const [modalOpened, setModalOpened] = useState(false);

  const checkForErrors = () => {
    if (!todoName.length) {
      setInputError(true);
      setInputErrorText('Empty entry');
    }
  };

  const todoCreationHandler = () => {
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
      completed: false,
      modificationDate: formattedDate,
    }));

    navigate(-1);
  };

  const todoEditHandler = () => {
    checkForErrors();

    if (!todoName.length) {
      return;
    }

    const formattedDate = new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    dispatch(editTodo({
      ...todos[Number(todoId) - 1],
      modificationDate: formattedDate,
      description: todoDescription,
      name: todoName,
    }));
    
    navigate(-1);
  };

  const handleModalOpen = () => setModalOpened(true);
  const handleModalClose = () => setModalOpened(false);

  const buttonHandler = () => {
    if (isTodoCreation) {
      todoCreationHandler();
    } else {
      todoEditHandler();
    }
  };

  const modalAcceptHandler = () => {
    navigate(-1);
  };

  const cancelButtonHandler = () => {
    handleModalOpen();
  };

  return (
    <StyledBox>
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
        title="Are you sure you want to discard your current changes?"
        acceptButtonLabel="Discard"
        onAccept={modalAcceptHandler}
        isWarning
      />
    </StyledBox>
  );
};
