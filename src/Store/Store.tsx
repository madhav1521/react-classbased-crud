import { createStore, combineReducers } from 'redux';
import userReducer from './UserSlice';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
