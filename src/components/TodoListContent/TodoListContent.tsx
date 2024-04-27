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
  useSearchParams,
} from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { setTodos } from '../../redux/todosSlice';

import { setFiltredTodos } from '../../redux/filtredTodos';
import { TodosSorting } from '../TodosSorting';
import { getSortedTodos } from '../../utils/getSortedTodos';
import { getFiltredTodos } from '../../utils/getFiltredTodos';

const StyledBox = styled(Box)({
  padding: '0 20px',
});

const StyledTypography = styled(Typography)({
  opacity: 0.6,
  padding: '21px',
});

type SliceAndDisplayTodosProps = {
  displayedTodos: Todo[],
  numberOfPage: string | undefined,
};

export const TodoListContent: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);
  const filtredTodos = useAppSelector(state => state.filtredTodos);

  const dispatch = useAppDispatch();

  const [todosToDisplay, setTodosToDisplay] = useState<Todo[]>(filtredTodos);
  const [noTodos, setNoTodos] = useState(Boolean(todos.length));

  const { pageNumber } = useParams();
  const [searchParams] = useSearchParams();

  const [todosFromLocalStorage] = useLocalStorage('todos', todos);

  const checkForNoTodos = (todosToCheck: Todo[]) => {
    if (!todosToCheck.length) {
      setNoTodos(false);
    } else {
      setNoTodos(true);
    }
  };

  const setTodosFromLocalStorageToRedux = (todosToSet: Todo[]) => {
    dispatch(
      setTodos(todosToSet),
    );
  };

  const setFiltredTodosToRedux = (todosToSet: Todo[]) => {
    const filterType = searchParams.get('filter') || '';

    const filtredTodosToSet = getFiltredTodos({
      todosToFilter: todosToSet,
      filterType,
    });

    dispatch(
      setFiltredTodos(
        filtredTodosToSet,
      ),
    );
  };

  const sliceAndDisplayTodos = ({
    displayedTodos,
    numberOfPage,
  }: SliceAndDisplayTodosProps) => {
    const sortType = searchParams.get('sort') || '';

    const currentPage = Number(numberOfPage) || 1;
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentItems = displayedTodos.slice(
      startIndex,
      startIndex + itemsPerPage,
    );

    const sortedTodos = getSortedTodos({
      todosToSort: currentItems,
      sortType,
    });

    setTodosToDisplay(sortedTodos);
  };

  useEffect(() => checkForNoTodos(filtredTodos), [filtredTodos]);

  useEffect(() => setTodosFromLocalStorageToRedux(todosFromLocalStorage), []);

  useEffect(() => setFiltredTodosToRedux(todos), [todos, searchParams]);

  useEffect(() => sliceAndDisplayTodos({
    displayedTodos: filtredTodos,
    numberOfPage: pageNumber,
  }), [pageNumber, filtredTodos, searchParams]);

  return (
    <List>
      <TodosSorting />

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
