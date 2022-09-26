/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const AUTH_API_REDUCER_KEY = "authApi"
export const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query({
      query: (code) => {
        return {
          url: "user",
          method: "GET",
          //   body: { code },
        }
      },
    }),
  }),
})

export const { useGetAccessTokenQuery } = authApi
