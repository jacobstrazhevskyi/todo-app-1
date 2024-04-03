import React from 'react';

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
  const { id, name } = todo;

  return (
    <ListItem
      disablePadding
      secondaryAction={(
        <TodoItemSecondaryAction
          todoId={id}
        />
      )}
    >
      <TodoItemContent
        todoId={id}
        todoName={name}
      />
    </ListItem>
  );
};
