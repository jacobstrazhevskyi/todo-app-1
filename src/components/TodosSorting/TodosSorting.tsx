import React from 'react';

import {
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from '@mui/material';

import { useSearchParams } from 'react-router-dom';

import { getSearchWith } from '../../utils/getSearchWith';

import { searchParamsKeys } from '../../auxFiles/searchParamsKeys';

const {
  sort,
} = searchParamsKeys;

const StyledListItem = styled(ListItem)({
  display: 'flex',
  gap: '10px',
  marginBottom: '10px',
});

const DEFAULT_SORT_BY = 'date';

export const TodosSorting: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get(sort);

  const setSortingBy = (
    event: SelectChangeEvent<unknown>,
  ) => {
    const { value } = event.target;

    if (value === 'none') {
      setSearchParams(
        getSearchWith(searchParams, { sort: null }),
      );

      return;
    }

    setSearchParams(
      getSearchWith(searchParams, { sort: value as string }),
    );
  };

  return (
    <StyledListItem>
      <Typography>
        Sort by:
      </Typography>

      <Select
        value={sortBy || DEFAULT_SORT_BY}
        size="small"
        defaultValue={sortBy || DEFAULT_SORT_BY}
        onChange={setSortingBy}
      >
        <MenuItem
          value="date"
        >
          Date
        </MenuItem>
        <MenuItem
          value="date-rv"
        >
          Date reverse
        </MenuItem>
        <MenuItem
          value="notcompleted"
        >
          Not completed
        </MenuItem>
        <MenuItem
          value="completed"
        >
          Completed
        </MenuItem>
      </Select>
    </StyledListItem>
  );
};
