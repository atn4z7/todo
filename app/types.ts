import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import rootReducer from './store/reducer'

// redux types
export type NormalizedObjects<T> = {
  byId: { [id: string]: T }
  allIds: string[]
}

export type StoreState = ReturnType<typeof rootReducer>

export enum TodoStatus {
  Pending = 'pending',
  Completed = 'completed'
}

export type Todo = {
  id: string
  title: string
  description: string
  status: TodoStatus
  dueDate: string
}

// navigation types
export enum UpdateAction {
  Add,
  Edit
}

type AddTodoParams = {
  updateAction: UpdateAction.Add
}

type EditTodoParams = {
  updateAction: UpdateAction.Edit
  id: string
}

export type RootStackParamList = {
  Home: undefined
  UpdateTodo: AddTodoParams | EditTodoParams
}

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type UpdateTodoSceneProps = StackScreenProps<
  RootStackParamList,
  'UpdateTodo'
>
