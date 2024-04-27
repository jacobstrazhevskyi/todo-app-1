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

export const TodoItemInfo: React.FC<Props> = ({
  todoName,
  todoDescription,
  creationDate,
  modificationDate,
  completed,
}) => {
  const StyledListItemText = styled(Box)({
    textDecoration: completed ? 'line-through' : '',
  });

  return (
    <StyledListItemText>
      <Typography>
        {todoName}
      </Typography>
      <Typography
        color="text.secondary"
      >
        {todoDescription}
      </Typography>
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
