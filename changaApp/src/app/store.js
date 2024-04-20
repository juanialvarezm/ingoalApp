import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
  } from 'redux-persist'
import authReducer from "../features/authSlice"
import gruposReducer from "../features/grupoSlice"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix:"redux-",
}

const reducers = combineReducers({
    auth:authReducer,
    grupos:gruposReducer,
 });

 const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer:persistedReducer,

  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false
      }),

})

export const persistor = persistStore(store)