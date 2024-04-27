import { sortTypes } from '../auxFiles/sortTypes';
import { Todo } from '../types/Todo';

const {
  date,
  dateReverse,
  notCompleted,
  completed,
} = sortTypes;

type Props = {
  todosToSort: Todo[],
  sortType: string,
};

export const getSortedTodos = ({
  todosToSort,
  sortType,
}: Props) => {
  const sortByNotCompleted = () => (

    todosToSort.sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }

      if (a.completed) {
        return 1;
      }

      return -1;
    })

  );

  const sortByDate = () => (

    todosToSort.sort((a, b) => {
      const dateA = new Date(a.creationDate);
      const dateB = new Date(b.creationDate);

      return dateA.getTime() - dateB.getTime();
    })

  );

  switch (sortType) {
    case date:
      return sortByDate();

    case dateReverse:
      return sortByDate().reverse();

    case notCompleted:
      return sortByNotCompleted();
      
    case completed:
      return sortByNotCompleted().reverse();

    default:
      return todosToSort;
  }
};
