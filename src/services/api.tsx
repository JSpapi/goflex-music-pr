import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const AUTH_API = 'http://localhost:3060/api/user';

const baseQuery = fetchBaseQuery({
  baseUrl: AUTH_API,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
