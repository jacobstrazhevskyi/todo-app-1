import React, { ChangeEvent } from 'react';

import {
  Box,
  TextField,
  styled,
} from '@mui/material';

const StyledTodoNameTextField = styled(TextField)({
  borderBottom: 'none',
  outline: 'none',
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

// i dont know why eslint angry on type Props
type Props = {
  todoName: string,
  // eslint-disable-next-line no-unused-vars
  setTodoName: (value: string) => void,
  todoDescription: string,
  // eslint-disable-next-line no-unused-vars
  setTodoDescription: (value: string) => void,
  inputError: boolean,
  inputErrorText: string,
  // eslint-disable-next-line no-unused-vars
  setInputError: (value: boolean) => void,
  // eslint-disable-next-line no-unused-vars
  setInputErrorText: (value: string) => void,
}

export const TodoInputs: React.FC<Props> = ({
  todoName,
  setTodoName,
  todoDescription,
  setTodoDescription,
  inputError,
  inputErrorText,
  setInputError,
  setInputErrorText,
}) => (
  <StyledBox>
    <StyledTodoNameTextField
      label="Todo name"
      multiline
      fullWidth
      maxRows={3}
      value={todoName}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setInputError(false);
        setInputErrorText('');
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
