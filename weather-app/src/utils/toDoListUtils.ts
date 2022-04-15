import { ToDoListDataType } from 'types';

export const customSort = (
  firstElement: ToDoListDataType,
  secondElement: ToDoListDataType,
) => {
  if (firstElement.timeValue > secondElement.timeValue) return 1;
  if (firstElement.timeValue < secondElement.timeValue) return -1;
  return 0;
};

export const getListAfterAdd = (
  list: ToDoListDataType[],
  newItem: ToDoListDataType,
) => {
  return [...list, newItem].sort(customSort);
};
