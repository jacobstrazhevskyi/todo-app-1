import React, { useEffect, useState } from 'react';

import uuid from 'react-uuid';

import AddIcon from '@mui/icons-material/Add';

import {
  Button,
  List,
  ListItem,
} from '@mui/material';

import { Link, useParams } from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { CustomTooltip } from '../CustomTooltip';

export const TodoListContent: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);
  const [todosToDisplay, setTodosToDisplay] = useState<Todo[]>(todos);

  const { pageNumber } = useParams();

  useEffect(() => {
    const currentPage = Number(pageNumber) || 1;
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = todos.slice(startIndex, startIndex + itemsPerPage);

    setTodosToDisplay(currentItems);
  }, [pageNumber]);

  console.log(todos);

  return (
    <List>
      {todosToDisplay.map((todo: Todo) => (
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
