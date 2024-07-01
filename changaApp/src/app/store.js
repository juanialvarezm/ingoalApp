import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
  } from 'redux-persist'
import authReducer from "../features/authSlice"
import gruposReducer from "../features/grupoSlice"
import fixtureReducer from "../features/fixtureSlice"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix:"redux-",
}

const reducers = combineReducers({
    auth:authReducer,
    fixtures:fixtureReducer,
    grupos:gruposReducer,
 });

 const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer:persistedReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })

})

export const persistor = persistStore(store)