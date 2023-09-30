import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

const AUTH_API = 'http://localhost:3060/api/user';

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

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
