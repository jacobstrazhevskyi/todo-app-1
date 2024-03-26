import { Tooltip } from '@mui/material';
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement<any, any>,
  tooltipTitle: string,
}

export const CustomTooltip: React.FC<Props> = ({ children, tooltipTitle }) => (
  <Tooltip
    title={tooltipTitle}
    enterDelay={500}
  >
    {children}
  </Tooltip>
);
