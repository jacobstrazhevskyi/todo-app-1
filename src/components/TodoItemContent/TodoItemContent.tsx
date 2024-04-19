import React, { useEffect } from 'react';

import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { toggleCompletedStatus } from '../../redux/todosSlice';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

type Props = {
  todoId: number,
  todoName: string,
  todoDescription: string,
  completed: boolean,
}

export const TodoItemContent: React.FC<Props> = ({
  todoName,
  todoId,
  completed,
  todoDescription,
}) => {
  const todos = useAppSelector(state => state.todos);
  const checkBoxListLabel = `checkbox-list-label-${todoId}`;
  const dispatch = useAppDispatch();

  const StyledListItemText = styled(ListItemText)({
    textDecoration: completed ? 'line-through' : '', 
  });

  const setTodosFromLocalStorage = useLocalStorage('todos', todos)[1];

  useEffect(() => {
    setTodosFromLocalStorage(todos);
  }, [todos]);

  const toggleCheckbox = () => {
    dispatch(toggleCompletedStatus(todoId));
  };

  return (
    <ListItemButton
      onClick={toggleCheckbox}
    >
      <ListItemIcon>
        <Checkbox
          inputProps={{ 'aria-labelledby': checkBoxListLabel }}
          checked={completed}
        />
      </ListItemIcon>
      <StyledListItemText
        secondary={todoDescription}
        primary={todoName}  
        id={checkBoxListLabel} 
        aria-label={checkBoxListLabel}
      />
    </ListItemButton>
  );
};
