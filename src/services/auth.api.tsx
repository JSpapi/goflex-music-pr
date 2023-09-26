import { LoginData, LoginResponseData, UserData } from '../types/user.type';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponseData, UserData>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<LoginResponseData, LoginData>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export const {
  endpoints: { login, register },
} = authApi;
