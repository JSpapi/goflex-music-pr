import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../services/auth.api';

export const listenerMiddleware = createListenerMiddleware();
// TODO REGISTER TOKEN
listenerMiddleware.startListening({
  matcher: authApi.endpoints.register.matchFulfilled,
  effect: ({ payload }, listenerApi) => {
    listenerApi.cancelActiveListeners();
    if (payload.token) localStorage.setItem('token', payload.token);
  },
});
// TODO LOGIN TOKEN

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: ({ payload }, listenerApi) => {
    listenerApi.cancelActiveListeners();
    if (payload.token) localStorage.setItem('token', payload.token);
  },
});
