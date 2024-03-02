import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useAppSelector } from '../../utils/hooks/useAppSelector';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Todo Name' },
  { field: 'description', headerName: 'Description' },
  { field: 'creationDate', headerName: 'Creation Date' },
  { field: 'modificationDate', headerName: 'Modification Date' },
];

export const TodosList: React.FC = () => {
  const todos = useAppSelector(state => state.todos);

  return (
    <DataGrid
      columns={columns}
      rows={todos}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      checkboxSelection
      autoPageSize
    />
  );
};
