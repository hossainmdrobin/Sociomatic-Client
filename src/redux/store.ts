import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'
import postComponentReducer from './slices/postComponentSlice'
import { api } from './api/api';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post_component: postComponentReducer,
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
