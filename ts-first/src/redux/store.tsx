import { configureStore, Action  } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import postSlice from './slices/postSlice'
import thunk from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'

export const store = configureStore({
    reducer:{counter: counterSlice.reducer, posts: postSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>