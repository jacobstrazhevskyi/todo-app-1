import { filterTypes } from '../auxFiles/filterTypes';
import { Todo } from '../types/Todo';

type Props = {
  todosToFilter: Todo[],
  filterType: string,
};

const {
  completed,
  notcompleted,
} = filterTypes;

export const getFiltredTodos = ({
  todosToFilter,
  filterType,
}: Props) => {
  switch (filterType) {
    case completed:
      return todosToFilter.filter(todo => todo.completed);

    case notcompleted:
      return todosToFilter.filter(todo => !todo.completed);

    default:
      return todosToFilter;
  }
};
