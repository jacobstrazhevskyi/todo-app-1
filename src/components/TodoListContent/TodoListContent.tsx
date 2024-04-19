import React, {
  useEffect,
  useState,
} from 'react';

import uuid from 'react-uuid';

import {
  Box,
  List,
  Typography,
  styled,
} from '@mui/material';

import {
  useParams,
} from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { setTodos } from '../../redux/todosSlice';

const StyledBox = styled(Box)({
  padding: '0 20px',
});

const StyledTypography = styled(Typography)({
  opacity: 0.6,
  padding: '21px',
});

export const TodoListContent: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);
  const [todosToDisplay, setTodosToDisplay] = useState<Todo[]>(todos);

  const dispatch = useAppDispatch();

  const [noTodos, setNoTodos] = useState(Boolean(todos.length));

  const { pageNumber } = useParams();

  useEffect(() => {
    if (!todos.length) {
      setNoTodos(false);
    } else {
      setNoTodos(true);
    }
  }, [todos]);

  const [todosFromLocalStorage] = useLocalStorage('todos', todos);

  useEffect(() => {
    dispatch(
      setTodos(todosFromLocalStorage),
    );
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
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

      {
        noTodos ? (
          todosToDisplay.map((todo: Todo) => (
            <TodoItem key={uuid()} {...{ todo }} />
          ))
        ) : (
          <StyledBox>
            <StyledTypography
              variant="h5"
            >
              Create new todo
            </StyledTypography>
          </StyledBox>
        )
      }

      <CreateTodoButton />
    </List>
  );
};
