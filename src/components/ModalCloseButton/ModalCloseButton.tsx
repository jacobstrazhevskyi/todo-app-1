import React from 'react';

import { 
  Box,
  IconButton,
  styled,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '15px',
});

type Props = {
  handleClose: () => void,
};

export const ModalCloseButton: React.FC<Props> = ({
  handleClose,
}) => (
  <StyledBox>
    <IconButton
      size="small"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </StyledBox>
);
