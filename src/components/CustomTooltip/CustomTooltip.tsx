import { Tooltip, TooltipProps } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props extends Omit<TooltipProps, 'title'> {
  children: ReactElement<any, any>,
  tooltipTitle: string,
}

export const CustomTooltip: React.FC<Props> = ({
  children,
  tooltipTitle,
  ...restProps
}) => (
  <Tooltip
    title={tooltipTitle}
    enterDelay={500}
    {...restProps}
  >
    {children}
  </Tooltip>
);
