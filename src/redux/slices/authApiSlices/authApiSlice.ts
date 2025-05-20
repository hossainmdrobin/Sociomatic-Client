import { getBaseUrl } from '@/getenv/getEnv';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import cookies from 'js-cookie'

const token = cookies.get('token');
console.log(getBaseUrl(), "base-url");
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<any, void>({
      query: () => ({
        url: '/auth/get-user-info',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetUserInfoQuery } = authApi;
