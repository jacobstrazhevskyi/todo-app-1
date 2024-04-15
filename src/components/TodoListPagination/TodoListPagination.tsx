import React, { useState } from 'react';

import {
  Box,
  Pagination,
  styled,
} from '@mui/material';

import { 
  useNavigate, 
  useParams,
} from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

const StyledBox3 = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flexStart',
  marginTop: '10px',
});

export const TodoListPagination: React.FC = () => {
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
  );
};
