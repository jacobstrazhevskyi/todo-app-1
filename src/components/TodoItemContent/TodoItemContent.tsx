import React from 'react';

import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { toggleCompletedStatus } from '../../redux/todosSlice';

type Props = {
  todoName: string,
  todoId: number,
  completed: boolean,
}

export const TodoItemContent: React.FC<Props> = ({
  todoName,
  todoId,
  completed,
}) => {
  const checkBoxListLabel = `checkbox-list-label-${todoId}`;
  const dispatch = useAppDispatch();

  const StyledListItemText = styled(ListItemText)({
    textDecoration: completed ? 'line-through' : '', 
  });

  return (
    <ListItemButton>
      <ListItemIcon>
        <Checkbox
          inputProps={{ 'aria-labelledby': checkBoxListLabel }}
          onChange={() => {
            dispatch(toggleCompletedStatus(todoId));
          }}
          checked={completed}
        />
      </ListItemIcon>
      <StyledListItemText
        primary={todoName}  
        id={checkBoxListLabel} 
        aria-label={checkBoxListLabel}
      />
    </ListItemButton>
  );
};
