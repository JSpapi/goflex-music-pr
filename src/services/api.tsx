import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from 'src/store';
// eslint-disable-next-line import/no-cycle

const AUTH_API = 'http://localhost:3060/api/';

const baseQuery = fetchBaseQuery({
  baseUrl: AUTH_API,
  prepareHeaders(headers, { getState }) {
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem('token');
    if (token && token !== null) {
      headers.set('authorization', `bearer ${token}`);
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: false,
  endpoints: () => ({}),
});
