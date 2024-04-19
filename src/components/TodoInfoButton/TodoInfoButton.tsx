import React, { useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';

import { IconButtonWithTooltipWrapper } from '../IconButtonWithTooltipWrapper';
import { TodoInfoModal } from '../TodoInfoModal';

type Props = {
  todoId: number,
};

export const TodoInfoButton: React.FC<Props> = ({
  todoId,
}) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <IconButtonWithTooltipWrapper
        tooltipTitle="Todo Info"
        onClick={handleModalOpen}
      >
        <InfoIcon />
      </IconButtonWithTooltipWrapper>
      <TodoInfoModal
        todoId={todoId}
        open={open}
        handleClose={handleModalClose}
      />
    </>
  );
};
