import { Box, TextField, styled } from '@mui/material';
import React, { ChangeEvent } from 'react';

const StyledTodoNameTextField = styled(TextField)({
  borderBottom: 'none',
  outline: 'none',
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

type Props = {
  todoName: string,
  // eslint-disable-next-line no-unused-vars
  setTodoName: (value: string) => void,
  todoDescription: string,
  // eslint-disable-next-line no-unused-vars
  setTodoDescription: (value: string) => void,
  inputError: boolean,
  inputErrorText: string,
}

export const TodoInputs: React.FC<Props> = ({
  todoName,
  setTodoName,
  todoDescription,
  setTodoDescription,
  inputError,
  inputErrorText,
}) => (
  <StyledBox>
    <StyledTodoNameTextField
      label="Todo name"
      multiline
      fullWidth
      maxRows={3}
      value={todoName}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value);
      }}
      error={inputError}
      helperText={inputErrorText}
    />
    <TextField
      label="Description"
      multiline
      fullWidth
      minRows={3}
      maxRows={6}
      value={todoDescription}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setTodoDescription(event.target.value);
      }}
    />
  </StyledBox>
);
