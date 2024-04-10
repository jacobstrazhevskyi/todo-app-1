import React, { useState } from 'react';

import {
  ListItem,
} from '@mui/material';

import { Todo } from '../../types/Todo';
import { TodoItemSecondaryAction } from '../TodoItemSecondAction';
import { TodoItemContent } from '../TodoItemContent/TodoItemContent';

type Props = {
  todo: Todo,
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { id, name, completed } = todo;

  const [hovered, setHovered] = useState(false);

  return (
    <ListItem
      onMouseEnter={() => {
        setHovered(true);
        console.log('hovered');
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log('unhovered');
      }}
      disablePadding
      secondaryAction={(
        hovered ? (
          <TodoItemSecondaryAction
            todoId={id}
          />
        ) : ('')
      )}
    >
      <TodoItemContent
        todoId={id}
        todoName={name}
        completed={completed}
      />
    </ListItem>
  );
};
