import React from 'react';

import { Typography, styled } from '@mui/material';

const CentredText = styled(Typography)({
  textAlign: 'center',
});

export const TodoAppTitle: React.FC = () => (
  <CentredText variant="h3">Todo App</CentredText>
);
