// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice';

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

export default store;
