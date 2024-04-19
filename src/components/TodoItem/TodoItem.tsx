import React from 'react';

import {
  ListItem,
  styled,
} from '@mui/material';

import { Todo } from '../../types/Todo';
import { TodoItemSecondaryAction } from '../TodoItemSecondAction';
import { TodoItemContent } from '../TodoItemContent/TodoItemContent';

type Props = {
  todo: Todo,
};

const StyledListItem = styled(ListItem)({
  ':hover > .MuiListItemSecondaryAction-root > .todo-item-secondary-actions': {
    opacity: 1,
  },
});

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const {
    id,
    name,
    completed,
    description,
  } = todo;

  return (
    <StyledListItem
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
        todoDescription={description}
        completed={completed}
      />
    </StyledListItem>
  );
};
