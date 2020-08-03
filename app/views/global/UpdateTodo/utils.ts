import { TodoStatus } from 'types'

export const getStatus = (completed: boolean) =>
  completed ? TodoStatus.Completed : TodoStatus.Pending

export const getCompletedValue = (status: TodoStatus) =>
  status === TodoStatus.Completed ? true : false

export const fieldKeys = {
  TITLE: 'title',
  DESC: 'description',
  DUE_DATE: 'dueDate'
}
