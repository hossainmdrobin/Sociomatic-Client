import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer ,PersistConfig} from 'redux-persist'
import storage from "redux-persist/lib/storage";

// Reducers
import counterReducer from './slices/counterSlice'
import postComponentReducer from './slices/postComponentSlice';
import topBarReducer from './slices/layoutSlices/layoutSlice';
import accountReducer from "./slices/accountsSlices/accountSlice";

// api
import apiSlice  from './api/apiSlice';
import { authApi } from './slices/authApiSlices/authApiSlice';

const rootReducer = combineReducers({
  counter:counterReducer,
  post_component: postComponentReducer,
  appTopBar:topBarReducer,
  accounts:accountReducer
})

const persistConfig:PersistConfig<ReturnType<typeof rootReducer>> = {
  key:'root',
  version: 1,
  storage,
  whitelist:["accounts"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:{
    persistedReducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    ['authApi']:authApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(authApi.middleware),
    // getDefaultMiddleware({
    //   serializableCheck:false,
    // }),
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