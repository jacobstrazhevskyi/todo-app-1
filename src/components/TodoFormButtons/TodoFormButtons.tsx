/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { addTodo } from '../../redux/todosSlice';
import { useAppSelector } from '../../utils/hooks/useAppSelector';

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
  inputError: boolean,
};

export const TodoFormButtons: React.FC<Props> = ({
  buttonLabel,
  todoDescription,
  todoName,
  isTodoCreation,
  setInputError,
  setInputErrorText,
  inputError,
}) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);
  const navigate = useNavigate();

  const checkForErrors = () => {
    if (!todoName.length) {
      setInputError(true);
      setInputErrorText('Empty entry');
      console.log('error');
    }
  };

  const creationHandler = () => {
    checkForErrors();
    
    if (inputError) {
      console.log('RETURNED');
      return;
    }
    
    console.log(todoName.length);

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

    navigate('../');
  };

  const buttonHandler = () => {
    if (isTodoCreation) {
      creationHandler();
    } else {
      return;
    }
  };

  const cancelButtonHandler = () => {

  };

  console.log(todos);

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
    </StyledBox2>
  );
};
