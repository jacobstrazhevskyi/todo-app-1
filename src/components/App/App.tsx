import React from 'react';

import { Box, Container, styled } from '@mui/material';
import { TodoAppTitle } from '../Title/Title';
import { ThemeSwitchMenu } from '../ThemeSwitchMenu/ThemeSwitchMenu';

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const App: React.FC = () => (
  <Container>
    <StyledBox>
      <TodoAppTitle />
      <ThemeSwitchMenu />
    </StyledBox>
  </Container>
);
