import React, { useState } from 'react';

import {
  Box,
  Pagination,
  styled,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { TodoAppTitle } from '../Title/Title';
import { ThemeSwitchMenu } from '../ThemeSwitchMenu';
import { TodosList } from '../TodosList/TodosList';
import { useAppSelector } from '../../utils/hooks/useAppSelector';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledBox3 = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flexStart',
  marginTop: '10px',
});

export const TodoListPage: React.FC = () => {  
  const todos = useAppSelector(state => state.todos);
  const pageCount = Math.ceil(todos.length / 10);

  const { pageNumber } = useParams();

  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`./${value}`);
  };

  return (
    <StyledBox>
      <TodoAppTitle />
      <ThemeSwitchMenu />
      <TodosList />
      <StyledBox3>
        <Pagination
          showFirstButton
          showLastButton
          shape="rounded"
          page={Number(pageNumber) || page}
          onChange={handlePageChange}
          count={pageCount}
        />
      </StyledBox3>
    </StyledBox>
  );
};
