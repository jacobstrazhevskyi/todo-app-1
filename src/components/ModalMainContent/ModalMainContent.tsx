import React from 'react';

import {
  Box,
  Typography,
  styled,
} from '@mui/material';

import { ConfirmButton } from '../ConfirmButton';
import { Button } from '../Button';

const StyledBox = styled(Box)({
  padding: '20px',
});

const ButtonsStyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '6px',
  marginTop: '15px',
  '& > button': {
    fontSize: '13px',
  },
});

type Props = {
  title: string,
  handleClose: () => void,
  confirmButtonLabel: string,
  onAccept: () => void,
};

export const ModalMainContent: React.FC<Props> = ({
  title,
  handleClose,
  confirmButtonLabel,
  onAccept,
}) => (
  <StyledBox>
    <Typography
      component="h2"
      fontSize="14px"
    >
      {title}
    </Typography>
    <ButtonsStyledBox>
      <Button
        buttonText="Cancel"
        onClick={handleClose}
      />
      <ConfirmButton
        confirmButtonLabel={confirmButtonLabel}
        onAccept={onAccept}
      />
    </ButtonsStyledBox>
  </StyledBox>
);
