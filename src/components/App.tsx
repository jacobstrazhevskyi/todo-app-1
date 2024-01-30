import React from 'react';

import { Box, Container, styled } from '@mui/material';
import { TodoAppTitle } from './TodoAppTitle';
import { ThemeSwitchMenu } from './ThemeSwitchMenu';

const FlexBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const App: React.FC = () => (
  <Container>
    <FlexBox>
      <TodoAppTitle />
      <ThemeSwitchMenu />
    </FlexBox>
  </Container>
);
