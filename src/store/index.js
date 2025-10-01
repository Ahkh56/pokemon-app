import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../features/pokemonApi';
import selectedReducer from '../features/selectedSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  selected: selectedReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [] // We persist RTK query cache via its own mechanism if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);
