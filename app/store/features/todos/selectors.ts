import { StoreState, TodoStatus } from 'types'

const emptyObj = {}

export const getPendingTodos = (state: StoreState) => {
  const allIds = state.todos.allIds
  return allIds
    .map((id) => state.todos.byId[id])
    .filter((item) => item.status === TodoStatus.Pending)
}

export const getCompletedTodos = (state: StoreState) => {
  const allIds = state.todos.allIds
  return allIds
    .map((id) => state.todos.byId[id])
    .filter((item) => item.status === TodoStatus.Completed)
}

export const getTodo = (state: StoreState, id: string) => {
  return state.todos.byId[id] || emptyObj
}
