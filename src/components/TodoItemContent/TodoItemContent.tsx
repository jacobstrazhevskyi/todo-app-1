import React from 'react';

import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

type Props = {
  todoName: string,
  todoId: number,
}

export const TodoItemContent: React.FC<Props> = ({
  todoName,
  todoId,
}) => {
  const checkBoxListLabel = `checkbox-list-label-${todoId}`;

  return (
    <ListItemButton>
      <ListItemIcon>
        <Checkbox
          inputProps={{ 'aria-labelledby': checkBoxListLabel }}
        />
      </ListItemIcon>
      <ListItemText
        primary={todoName}
        id={checkBoxListLabel} 
        aria-label={checkBoxListLabel}
      />
    </ListItemButton>
  );
};
