import React, {
  useEffect,
  useState,
} from 'react';

import uuid from 'react-uuid';

import {
  List,
} from '@mui/material';

import {
  useParams,
} from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

export const TodoListContent: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);
  const [todosToDisplay, setTodosToDisplay] = useState<Todo[]>(todos);

  const { pageNumber } = useParams();

  if (pageNumber > ) {

  }

  useEffect(() => {
    console.log(todos);
    const currentPage = Number(pageNumber) || 1;
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentItems = todos.slice(
      startIndex,
      startIndex + itemsPerPage,
    );

    setTodosToDisplay(currentItems);
  }, [pageNumber, todos]);

  return (
    <List>
      {todosToDisplay.map((todo: Todo) => (
        <TodoItem key={uuid()} {...{ todo }} />
      ))}

      <CreateTodoButton />
    </List>
  );
};
