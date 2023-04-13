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
import { gooseTrackerApi } from 'redux/api/gooseTrackerApi';
import { authReducer } from './auth/authSlice1';
import { themeReducer } from './theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['tokens'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    [gooseTrackerApi.reducerPath]: [gooseTrackerApi.reducer],
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    gooseTrackerApi.middleware,
  ],
});

export const persistor = persistStore(store);
