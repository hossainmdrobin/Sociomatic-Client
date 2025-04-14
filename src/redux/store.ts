import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer ,PersistConfig} from 'redux-persist'
import storage from "redux-persist/lib/storage";

import counterReducer from './slices/counterSlice'
import postComponentReducer from './slices/postComponentSlice'
import apiSlice  from './api/apiSlice';

const rootReducer = combineReducers({
  counter:counterReducer,
  post_component: postComponentReducer,
})

const persistConfig:PersistConfig<ReturnType<typeof rootReducer>> = {
  key:'root',
  version: 1,
  storage,
  whitelist:[]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:{
    persistedReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false,
    }),
  devTools:process.env.NODE_ENV!="production"
});

// export const store = configureStore({
//   reducer: {
//     // counter: counterReducer,
//     post_component: postComponentReducer,
//     [apiSlice.reducerPath]:apiSlice.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)