import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Box, styled } from '@mui/material';
import { Button } from '../Button';
import { getSearchWith } from '../../utils/getSearchWith';

import { buttonVariants } from '../../auxFiles/buttonVariants';
import { filterTypes } from '../../auxFiles/filterTypes';

import { searchParamsKeys } from '../../auxFiles/searchParamsKeys';

const {
  filter,
} = searchParamsKeys;

const {
  contained,
  outlined,
} = buttonVariants;

const {
  completed,
  notcompleted,
} = filterTypes;

const StyledBox = styled(Box)({
  display: 'flex',
  marginBottom: '10px',
  gap: '5px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    padding: '5px 10px',
  },
}));

export const TodosFilters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get(filter);

  const setAllFilter = () => setSearchParams(
    getSearchWith(searchParams, { filter: null }),
  );

  const setCompletedFilter = () => setSearchParams(
    getSearchWith(searchParams, { filter: completed }),
  );
  
  const setNotCompletedFilter = () => setSearchParams(
    getSearchWith(searchParams, { filter: notcompleted }),
  );

  useEffect(() => {
    if (!filterType) {
      setAllFilter();
    }
  }, [searchParams]);

  return (
    <StyledBox>
      <StyledButton
        variant={!filterType ? contained : outlined}
        onClick={setAllFilter}
      >
        All
      </StyledButton>
      <StyledButton
        variant={filterType === completed ? contained : outlined}
        onClick={setCompletedFilter}
      >
        Completed
      </StyledButton>
      <StyledButton
        variant={filterType === notcompleted ? contained : outlined}
        onClick={setNotCompletedFilter}
      >
        Not completed
      </StyledButton>
    </StyledBox>
  );
};
