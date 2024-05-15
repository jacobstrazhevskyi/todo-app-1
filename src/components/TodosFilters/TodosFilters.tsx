import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { getSearchWith } from '../../utils/getSearchWith';

import { filterTypes } from '../../auxFiles/filterTypes';

import { searchParamsKeys } from '../../auxFiles/searchParamsKeys';

const {
  filter,
} = searchParamsKeys;

const {
  all,
  completed,
  notcompleted,
} = filterTypes;

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

  const HandleFilterSelect = (
    event: SelectChangeEvent<unknown>,
  ) => {
    const { value } = event.target;

    switch (value) {
      case all:
        setAllFilter();
        break;

      case completed:
        setCompletedFilter();
        break;

      case notcompleted:
        setNotCompletedFilter();
        break;

      default:
        setAllFilter();
        break;
    }
  };

  useEffect(() => {
    if (!filterType) {
      setAllFilter();
    }
  }, [searchParams]);

  return (
    <Select
      defaultValue={filterType || all}
      onChange={HandleFilterSelect}
      size="small"
    >
      <MenuItem
        value={all}
      >
        All
      </MenuItem>
      <MenuItem
        value={completed}
      >
        Completed
      </MenuItem>
      <MenuItem
        value={notcompleted}
      >
        Not completed
      </MenuItem>
    </Select>
  );
};
