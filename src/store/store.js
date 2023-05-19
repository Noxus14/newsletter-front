import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { newsletterSlice } from './newsletter'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newsletter: newsletterSlice.reducer
  },
})