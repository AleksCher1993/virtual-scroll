import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi=createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getDataFromJSONPlaceholder: builder.query({
      query: ({limit=12,start=0}) => ({
        url:"posts",
        params:{
          _limit:limit,
          _start:start,
        }
      }),
    }),
    getDataUserOfIdFromJSONPlaceholder:builder.query({
      query:(id)=>`posts/${id}`
    })
  }),
})

export const {useGetDataFromJSONPlaceholderQuery,useGetDataUserOfIdFromJSONPlaceholderQuery}=postApi