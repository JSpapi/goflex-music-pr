import {
  LoginData,
  LoginResponseData,
  UserData,
  IEmail,
  IOtpCode,
  VerifyOTPData,
} from '../types/user.type';
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
    sendEmail: builder.mutation<string, IEmail>({
      query: (emailData) => ({
        url: '/registerEmail',
        method: 'POST',
        body: emailData,
      }),
    }),
    current: builder.query<LoginResponseData, void>({
      query: () => ({
        url: '/current',
        method: 'GET',
      }),
    }),
    generateOTP: builder.query<IOtpCode, string>({
      query: (name) => ({
        url: '/generateOtp',
        method: 'GET',
        params: { name },
      }),
    }),
    verifyOTP: builder.query<{ message: string }, VerifyOTPData>({
      query: ({ name, code }) => ({
        url: '/verifyOtp',
        method: 'GET',
        params: { name, code },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentQuery,
  useSendEmailMutation,
  useGenerateOTPQuery,
  useVerifyOTPQuery,
} = authApi;
export const {
  endpoints: { login, register, current },
} = authApi;
