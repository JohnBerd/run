import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistorOptions } from 'redux-persist'
import persistStorage from './persistStorage'

import userRootReducer, {
  sliceName as userSliceName,
} from './reducers/user.reducer'
import themeRootReducer, {
  sliceName as themeSliceName,
} from './reducers/theme.reducer'

const persistConfig = {
  key: 'persistStore',
  storage: persistStorage,
  whitelist: [userSliceName, themeSliceName],
}

const rootReducer = combineReducers({
  ...userRootReducer,
  ...themeRootReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const resetAccountStore = () => ({ type: 'RESET' })

const resettableReducer: typeof persistedReducer = (
  state,
  action,
  ...other
) => {
  if (action.type === 'RESET') {
    return persistedReducer(undefined, action)
  }
  return persistedReducer(state, action, ...other)
}

const store = configureStore({
  reducer: resettableReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store, {
  manualPersist: true,
} as PersistorOptions)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
