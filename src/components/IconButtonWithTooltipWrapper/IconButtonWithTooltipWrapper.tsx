import React, { ReactNode } from 'react';

import { IconButton } from '@mui/material';
import { CustomTooltip } from '../CustomTooltip';

type Props = {
  children: ReactNode,
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void,
  tooltipTitle: string,
}

export const IconButtonWithTooltipWrapper: React.FC<Props> = ({
  children,
  onClick = () => {},
  tooltipTitle,
}) => (
  <CustomTooltip tooltipTitle={tooltipTitle}>
    <IconButton
      onClick={onClick}
    >
      {children}
    </IconButton>
  </CustomTooltip>
);
