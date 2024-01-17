import { configureStore } from '@reduxjs/toolkit'
import UsersliceReducer from './Userslice'
import  ProductSlice  from './CreateSlide'

export const store = configureStore({
  reducer: {
    user:UsersliceReducer,
    product:ProductSlice
  },
})