import { configureStore } from '@reduxjs/toolkit';
import { internalApi } from 'src/services/internalApi';

export const store = configureStore({
  reducer: {
    [internalApi.reducerPath]: internalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(internalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
