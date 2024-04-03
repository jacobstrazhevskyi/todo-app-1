import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';

import { styled } from '@mui/system';

type Props = {
  opened: boolean,
  handleClose: () => void,
  onAccept: () => void,
  title: string,
  acceptButtonLabel: string,
  isWarning: boolean,
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

const MainContentStyledBox = styled(Box)({
  padding: '20px',
});

const CloseButtonStyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '15px',
});

export const AcceptingModal: React.FC<Props> = ({
  opened,
  handleClose,
  onAccept,
  title,
  acceptButtonLabel,
  isWarning,
}) => (
  <Modal
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
        <CloseButtonStyledBox>
          <IconButton
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </CloseButtonStyledBox>
        <MainContentStyledBox>
          <Typography
            component="h2"
            fontSize="14px"
          >
            {title}
          </Typography>
          <ButtonsStyledBox>
            <Button
              onClick={handleClose}
            >
              Cancel
            </Button>
            {isWarning ? (
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={onAccept}
              >
                {acceptButtonLabel}
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                onClick={onAccept}
              >
                {acceptButtonLabel}
              </Button>
            )}
          </ButtonsStyledBox>
        </MainContentStyledBox>
      </StyledBox>
    </Fade>
  </Modal>
);
