import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>;
