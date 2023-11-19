import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';

// Configuration for persisting Redux state
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Export root state type
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
