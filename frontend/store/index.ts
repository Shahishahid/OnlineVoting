import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import electionReducer from './electionSlice'
import voteReducer from './voteSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    elections: electionReducer,
    votes: voteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
