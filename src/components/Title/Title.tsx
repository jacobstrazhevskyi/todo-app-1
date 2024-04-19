import React from 'react';

import { Typography, styled } from '@mui/material';

const CentredText = styled(Typography)({
  textAlign: 'center',
});

type Props = {
  titleText?: string,
  children?: React.ReactNode,
};

export const Title: React.FC<Props> = ({
  titleText,
  children,
}) => {
  const titleContent = titleText || children;

  return (
    <CentredText variant="h3">
      {titleContent}
    </CentredText>
  );
};
