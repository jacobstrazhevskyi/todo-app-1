import React, { useEffect, useState } from 'react';

import {
  Box,
  Pagination,
  styled,
} from '@mui/material';

import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { getSearchWith } from '../../utils/getSearchWith';

const StyledBox3 = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flexStart',
  marginTop: '10px',
});

type CheckForPageCorectnessProps = {
  countOfPage: number,
  numberOfPage: string | undefined,
  searchParamsCurrent: string,
};

export const TodoListPagination: React.FC = () => {
  const todos = useAppSelector(state => state.filtredTodos);

  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(todos.length / 10);
  const { pageNumber } = useParams();

  const [searchParams] = useSearchParams();
  const currentSearchParams = getSearchWith(searchParams, {});

  const navigate = useNavigate();

  const checkPageCorrectness = ({
    countOfPage,
    numberOfPage,
    searchParamsCurrent,
  }: CheckForPageCorectnessProps) => {
    if (!countOfPage) {
      return;
    }

    if (Number(numberOfPage) > countOfPage) {
      setPage(countOfPage);
      navigate(`./${countOfPage}?${searchParamsCurrent}`);
    }
  };

  useEffect(() => checkPageCorrectness({
    countOfPage: pageCount,
    numberOfPage: pageNumber,
    searchParamsCurrent: currentSearchParams,
  }), [pageNumber, currentSearchParams, todos]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`./${value}?${currentSearchParams}`);
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
