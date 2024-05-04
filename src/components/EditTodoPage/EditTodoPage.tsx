import React, { useState } from 'react';

import {
  Paper,
  styled,
} from '@mui/material';

import { useParams } from 'react-router-dom';

import { TodoInputs } from '../TodoInputs';
import { TodoFormButtons } from '../TodoFormButtons';
import { useAppSelector } from '../../utils/hooks/useAppSelector';

const StyledPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '50px',
  padding: '20px',
});

export const EditTodoPage: React.FC = () => {
  const { todoId } = useParams();
  const todos = useAppSelector(state => state.todos);

  const { name, description } = todos[Number(todoId) - 1];

  const [todoName, setTodoName] = useState(name);
  const [todoDescription, setTodoDescription] = useState(description);

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
        buttonLabel="Save"
        isTodoCreation={false}
        setInputError={setInputError}
        setInputErrorText={setInputErrorText}
      />
    </StyledPaper>
  );
};
