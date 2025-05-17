import { getBaseUrl } from '@/getenv/getEnv';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import cookies from 'js-cookie'

const token = cookies.get('token');
console.log(getBaseUrl(), "base-url");
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        addAccount: builder.mutation<any[], any>({
            query: (data) => ({
                url: '/accounts/add-account',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            }),
        }),
    }),
});

export const { useAddAccountMutation } = authApi;
