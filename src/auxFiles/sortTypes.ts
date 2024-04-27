type SortTypes = {
  date: 'date',
  dateReverse: 'date-rv',
  notCompleted: 'notcompleted',
  completed: 'completed',
  DEFAULT_SORT_BY?: string,
};

const sortTypes: SortTypes = {
  date: 'date',
  dateReverse: 'date-rv',
  notCompleted: 'notcompleted',
  completed: 'completed',
};

sortTypes.DEFAULT_SORT_BY = 'date';

export { sortTypes };
