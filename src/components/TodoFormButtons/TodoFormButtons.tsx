/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import {
  Box,
  Button,
  styled,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { Modal } from '../Modal';
import { addTodo, editTodo, setTodos } from '../../redux/todosSlice';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

import { localStorageKeys } from '../../auxFiles/localStorageKeys';
import { modalAux } from '../../auxFiles/modalAux';

const {
  todosKeys: {
    todos: todosLocalStorageKey,
  },
} = localStorageKeys;

const {
  titles: {
    confirmDiscardTitle,
  },
  buttonsLables: {
    discardLabel,
  },
} = modalAux;

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

  const { current: todoNameRef } = useRef(todoName);
  const { current: todoDescriptionRef } = useRef(todoDescription);

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

    const newTodo = {
      id: todos.length + 1, 
      name: todoName,
      description: todoDescription,
      creationDate: formattedDate,
      completed: false,
      modificationDate: formattedDate,
    };

    dispatch(
      addTodo(newTodo),
    );

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

    const updatedTodo = {
      ...todos[Number(todoId) - 1],
      modificationDate: formattedDate,
      description: todoDescription,
      name: todoName,
    };

    dispatch(
      editTodo(updatedTodo),
    );
    
    navigate(-1);
  };

  const [

    todosFromLocalStorage,
    setTodosFromLocalStorage,

  ] = useLocalStorage(todosLocalStorageKey, todos);

  useEffect(() => {
    setTodosFromLocalStorage(todos);
  }, [todos]);

  useEffect(() => {
    dispatch(
      setTodos(
        todosFromLocalStorage,  
      ),
    );
  }, []);

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

  const checkForUpdates = () => (
    todoNameRef === todoName 
      && todoDescriptionRef === todoDescription
  );

  const cancelButtonHandler = () => {
    if (checkForUpdates()) {
      navigate(-1);

      return;
    }

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
      <Modal
        opened={modalOpened}
        handleClose={handleModalClose}
        title={confirmDiscardTitle}
        confirmButtonLabel={discardLabel}
        onAccept={modalAcceptHandler}
      />
    </StyledBox>
  );
};
