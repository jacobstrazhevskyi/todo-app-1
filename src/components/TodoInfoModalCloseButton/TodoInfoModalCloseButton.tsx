import React from 'react';

import { 
  Box,
  IconButton,
  styled,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const CloseButtonStyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

type Props = {
  handleClose: () => void,
};

export const TodoInfoModalCloseButton: React.FC<Props> = ({
  handleClose,
}) => (
  <CloseButtonStyledBox>
    <IconButton
      size="small"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </CloseButtonStyledBox>
);
