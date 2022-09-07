import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { foodsSlice } from './foods/foodsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    foods: foodsSlice.reducer,
  },
})