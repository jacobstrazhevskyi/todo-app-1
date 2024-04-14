import React from 'react';

import { Button } from '../Button';

type Props = {
  onAccept: () => void,
  confirmButtonLabel: string,
}

export const ConfirmButton: React.FC<Props> = ({
  onAccept,
  confirmButtonLabel,
}) => (
  <Button
    size="small"
    variant="contained"
    color="error"
    onClick={onAccept}
    buttonText={confirmButtonLabel}
  >
    {confirmButtonLabel}
  </Button>
);
