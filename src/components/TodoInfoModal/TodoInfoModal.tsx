import React from 'react';

import {
  Box,
  Fade,
  Modal,
  Typography,
  styled,
} from '@mui/material';

import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { TodoInfoModalCloseButton } from '../TodoInfoModalCloseButton';

type Props = {
  todoId: number,
  open: boolean,
  handleClose: () => void,
};

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  minWidth: '230px',
  borderRadius: '15px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}));

export const TodoInfoModal: React.FC<Props> = ({
  todoId,
  open,
  handleClose,
}) => {
  const todos = useAppSelector(state => state.todos);

  const {
    creationDate,
    modificationDate,
  } = todos.find(todo => todo.id === todoId) || { creationDate: '', modificationDate: '' };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Fade
        in={open}
      >
        <StyledBox>
          <TodoInfoModalCloseButton
            handleClose={handleClose}
          />
          <Typography>
            {`Creation date: ${creationDate}`}
          </Typography>
          <Typography>
            {`Modification date: ${modificationDate}`}
          </Typography>
        </StyledBox>
      </Fade>
    </Modal>
  );
};
