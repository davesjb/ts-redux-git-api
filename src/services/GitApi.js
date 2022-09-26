/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//    where is types?

export const AUTH_API_REDUCER_KEY = "authApi"
export const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/user",
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query({
      query: (code) => {
        return {
          url: "github/access_token",
          method: "GET",
          body: { code },
        }
      },
    }),
  }),
})

export const { useGetAccessToken } = authApi
