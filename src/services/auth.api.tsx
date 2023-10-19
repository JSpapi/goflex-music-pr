import {
  IEmail,
  IOtpCode,
  LoginData,
  LoginResponseData,
  UserData,
  VerifyOTPData,
} from 'types/user.type';
import { api } from './api';

type RessetPasswordData = Pick<UserData, 'name' | 'password'>;

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponseData, UserData>({
      query: (userData) => ({
        url: 'user/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<LoginResponseData, LoginData>({
      query: (userData) => ({
        url: 'user/login',
        method: 'POST',
        body: userData,
      }),
    }),
    sendEmail: builder.mutation<string, IEmail>({
      query: (emailData) => ({
        url: 'user/registerEmail',
        method: 'POST',
        body: emailData,
      }),
    }),
    resetPassword: builder.mutation<string, RessetPasswordData>({
      query: (newPassword) => ({
        url: 'user/resetPassword',
        method: 'PUT',
        body: newPassword,
      }),
    }),
    current: builder.query<LoginResponseData, void>({
      query: () => ({
        url: 'user/current',
        method: 'GET',
      }),
    }),
    generateOTP: builder.query<IOtpCode, string>({
      query: (name) => ({
        url: 'user/generateOtp',
        method: 'GET',
        params: { name },
      }),
    }),
    verifyOTP: builder.query<{ message: string }, VerifyOTPData>({
      query: ({ name, code }) => ({
        url: 'user/verifyOtp',
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
  useResetPasswordMutation,
} = authApi;
export const {
  endpoints: { login, register, current },
} = authApi;
