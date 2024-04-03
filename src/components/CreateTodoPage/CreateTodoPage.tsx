import React, { useState } from 'react';

import {
  Paper,
  styled,
} from '@mui/material';

import { TodoInputs } from '../TodoInputs';
import { TodoFormButtons } from '../TodoFormButtons';

const StyledPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '50px',
  padding: '20px',
});

export const CreateTodoPage: React.FC = () => {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const [inputError, setInputError] = useState(false);
  const [inputErrorText, setInputErrorText] = useState('');

  return (
    <StyledPaper>
      <TodoInputs
        todoName={todoName}
        todoDescription={todoDescription}
        setTodoName={setTodoName}
        setTodoDescription={setTodoDescription}
        inputError={inputError}
        inputErrorText={inputErrorText}
        setInputError={setInputError}
        setInputErrorText={setInputErrorText}
      />
      <TodoFormButtons
        todoName={todoName}
        todoDescription={todoDescription}
        buttonLabel="Create"
        isTodoCreation
        setInputError={setInputError}
        setInputErrorText={setInputErrorText}
      />
    </StyledPaper>
  );
};
