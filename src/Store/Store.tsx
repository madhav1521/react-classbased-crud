// // import { createStore, combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './UserSlice';
// import { useDispatch } from 'react-redux';

// // Combine multiple reducers if needed

// // const rootReducer = combineReducers({
// //   user: userSlice,
// // });


// // Create the Redux store
// const store = configureStore({
//   reducer:{
//     user:userSlice.reducer,
//   }
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch ;
// export default store;

// import addUsers from "./UserSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import userSlice from './UserSlice';
import { useDispatch } from "react-redux";
import rootReducer from "../reducers";
import { createStore } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);

// const store = configureStore({
//   reducer: {
//     persistedReducer,
//     user:userSlice.reducer,
//   },
// })

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch ;
export default store;
export { store, persistor };
