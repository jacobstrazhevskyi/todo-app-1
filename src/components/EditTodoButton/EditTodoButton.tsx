import React from 'react';

import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';

import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';

type Props = {
  todoId: number,
};

export const EditTodoButton: React.FC<Props> = ({
  todoId,
}) => {
  const navigate = useNavigate();

  const handleTodoEdit = () => {
    navigate(`edit/${todoId}`);
  };

  return (
    <IconButtonWithTooltipWrapper
      tooltipTitle="Edit todo"
      onClick={handleTodoEdit}
    >
      <EditIcon />
    </IconButtonWithTooltipWrapper>
  );
};
