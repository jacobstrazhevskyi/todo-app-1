import React from 'react';

import {
  Backdrop,
  Box,
  Fade,
  Modal as ModalMUI,
} from '@mui/material';

import { styled } from '@mui/system';

import { ModalMainContent } from '../ModalMainContent';
import { CloseButton } from '../CloseButton';

type Props = {
  opened: boolean,
  handleClose: () => void,
  onAccept: () => void,
  title: string,
  confirmButtonLabel: string,
};

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  paddingTop: '10px',
  minWidth: '230px',
  borderRadius: '15px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const Modal: React.FC<Props> = ({
  opened,
  handleClose,
  onAccept,
  title,
  confirmButtonLabel,
}) => (
  <ModalMUI
    open={opened}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
  >
    <Fade in={opened}>
      <StyledBox>
        <CloseButton 
          handleClose={handleClose}
        />
        <ModalMainContent 
          title={title}
          handleClose={handleClose}
          onAccept={onAccept}
          confirmButtonLabel={confirmButtonLabel}
        />
      </StyledBox>
    </Fade>
  </ModalMUI>
);
