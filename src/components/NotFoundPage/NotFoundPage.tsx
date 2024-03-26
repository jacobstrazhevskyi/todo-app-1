import React from 'react';

import { Box, Typography, styled } from '@mui/material';

const StyledBox = styled(Box)({
  width: '100vw',
  marginTop: '50px',
});

export const NotFoundPage: React.FC = () => (
  <StyledBox>
    <Typography variant="h1">
      404 PAGE NOT FOUND
    </Typography>
  </StyledBox>
);
