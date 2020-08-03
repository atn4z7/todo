import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { reducer as todos } from './features/todos'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  todos
})

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer)

export default persistedRootReducer
