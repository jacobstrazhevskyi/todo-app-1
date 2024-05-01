import React from 'react';

import {
  Box,
  Typography,
  styled,
} from '@mui/material';

import { Caption } from '../Caption';

type Props = {
  todoName: string,
  todoDescription: string,
  creationDate: string,
  modificationDate: string,
  completed: boolean,
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
});

const StyledTypography = styled(Typography)({
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  width: '100%',
  paddingRight: '15px',
});

export const TodoItemInfo: React.FC<Props> = ({
  todoName,
  todoDescription,
  creationDate,
  modificationDate,
  completed,
}) => {
  const StyledListItemText = styled(Box)({
    textDecoration: completed ? 'line-through' : '',
    maxWidth: '100%',
  });

  return (
    <StyledListItemText>
      <StyledTypography>
        {todoName}
      </StyledTypography>
      <StyledTypography
        color="text.secondary"
      >
        {todoDescription}
      </StyledTypography>
      <StyledBox>
        <Caption
          captionText="Created:"
        />
        <Caption
          captionText={creationDate}
        />
        <Caption
          captionText="Edited:"
        />
        <Caption
          captionText={modificationDate}
        />
      </StyledBox>
    </StyledListItemText>
  );
};
