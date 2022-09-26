import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './todoListSlice'

export const store = configureStore({
    reducer: {
         list: todoListReducer,
    },
})

export default store;