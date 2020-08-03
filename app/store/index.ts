import { configureStore as RTKconfigureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import loggerMiddleware from 'redux-logger'
import rootReducer from './reducer'

const getMiddleWare = () => {
  if (__DEV__) {
    return [loggerMiddleware]
  } else {
    return []
  }
}

export default function configureStore() {
  const middleware = getMiddleWare()

  const store = RTKconfigureStore({
    reducer: rootReducer,
    middleware
  })

  const persistor = persistStore(store)

  return { store, persistor }
}
