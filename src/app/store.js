import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "../services/GitApi"

console.log(authApi)
// Store token in here?

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
