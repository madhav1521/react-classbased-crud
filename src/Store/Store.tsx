// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice';
import { useDispatch } from 'react-redux';

// Combine multiple reducers if needed
// const rootReducer = combineReducers({
//   user: userSlice,
// });


// Create the Redux store
const store = configureStore({
  reducer:{
    user:userSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch ;
export default store;



