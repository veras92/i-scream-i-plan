import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { themeReducer } from './theme/themeSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { authApi } from './auth/authApi';
import { tasksApi } from './tasks/tasksApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    tasksApi.middleware,
  ],
});

export const persistor = persistStore(store);
