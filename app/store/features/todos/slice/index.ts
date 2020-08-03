import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NormalizedObjects, Todo, TodoStatus } from 'types'

type TodosState = NormalizedObjects<Todo>

type AddTodoPayload = {
  id: string
  title: string
  description: string
  dueDate: string
}

type EditTodoPayload = Todo

type DeleteTodoPayload = {
  id: string
}

const initialState: TodosState = {
  byId: {},
  allIds: []
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, action: PayloadAction<AddTodoPayload>) {
      const item = action.payload
      const { id } = item

      if (!state.allIds.includes(id)) {
        state.allIds.push(id)
        state.byId[id] = {
          ...item,
          status: TodoStatus.Pending
        }
      }
    },
    edit(state, action: PayloadAction<EditTodoPayload>) {
      const item = action.payload
      const { id } = item

      if (state.allIds.includes(id)) {
        state.byId[id] = {
          ...state.byId[id],
          ...item
        }
      }
    },
    remove(state, action: PayloadAction<DeleteTodoPayload>) {
      const indexToRemove = state.allIds.findIndex(
        (id) => id === action.payload.id
      )

      if (indexToRemove !== -1) {
        delete state.byId[action.payload.id]
        state.allIds.splice(indexToRemove, 1)
      }
    }
  }
})

const actions = slice.actions
const reducer = slice.reducer

export { actions, reducer }
