import React, { useEffect } from 'react';

import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { toggleCompletedStatus } from '../../redux/todosSlice';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { TodoItemInfo } from '../TodoItemInfo';

import { localStorageKeys } from '../../auxFiles/localStorageKeys';

const {
  todosKeys: {
    todos: todosLocalStorageKey,
  },
} = localStorageKeys;

type Props = {
  todoId: number,
  todoName: string,
  todoDescription: string,
  completed: boolean,
  creationDate: string,
  modificationDate: string,
}

export const TodoItemContent: React.FC<Props> = ({
  todoName,
  todoId,
  completed,
  todoDescription,
  creationDate,
  modificationDate,
}) => {
  const todos = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const setTodosFromLocalStorage = useLocalStorage(todosLocalStorageKey, todos)[1];

  useEffect(() => {
    setTodosFromLocalStorage(todos);
  }, [todos]);

  const toggleCheckbox = () => {
    dispatch(
      toggleCompletedStatus(todoId),
    );
  };

  return (
    <ListItemButton
      onClick={toggleCheckbox}
    >
      <ListItemIcon>
        <Checkbox
          checked={completed}
        />
      </ListItemIcon>

      <TodoItemInfo
        completed={completed}
        creationDate={creationDate}
        modificationDate={modificationDate}
        todoName={todoName}
        todoDescription={todoDescription}
      />
    </ListItemButton>
  );
};
