import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import primaryerReducer from './primary'

const store =  configureStore({
  reducer: {
    counter: counterReducer,
    primaryer: primaryerReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

