import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "/data";
const APP_ID = "65080fec01538513690ca63e";

const createRequest = (url, headers = {}) => ({
  url,
  headers: {
    ...headers,
    "app-id": APP_ID,
  },
});

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: (limit) => createRequest(`/user?limit=${limit}`),
    }),
    getUserDetails: builder.query({
      query: (userId) => createRequest(`/user?${userId}`),
    }),
  }),
});

export const {useGetUserListQuery, useGetUserDetailsQuery} = usersApi;
