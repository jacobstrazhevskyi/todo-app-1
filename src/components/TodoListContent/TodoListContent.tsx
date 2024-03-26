import React from 'react';

import uuid from 'react-uuid';

import AddIcon from '@mui/icons-material/Add';

import {
  Button,
  List,
  ListItem,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { CustomTooltip } from '../CustomTooltip';

export const TodoListContent: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);

  return (
    <List>
      {todos.map((todo: Todo) => (
        <TodoItem key={uuid()} {...{ todo }} />
      ))}
      <ListItem>
        <CustomTooltip
          tooltipTitle="Create todo"
        >
          <Link to="./create">
            <Button
              variant="contained"
            >
              <AddIcon />
            </Button>
          </Link>
        </CustomTooltip>
      </ListItem>
    </List>
  );
};
