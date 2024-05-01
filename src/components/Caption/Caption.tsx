import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  captionText?: string,
  children?: React.ReactNode,
};

export const Caption: React.FC<Props> = ({
  children,
  captionText = 'caption text',
}) => {
  const captionContent = captionText || children;

  return (
    <Typography
      color="primary.light"
      variant="caption"
    >
      {captionContent}
    </Typography>
  );
};
