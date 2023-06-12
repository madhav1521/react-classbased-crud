import { combineReducers } from 'redux';
import AddEdit from './AddEdit';
import userSlice from '../Store/UserSlice';

const rootReducer = combineReducers({
  user:userSlice.reducer,
  content:userSlice.reducer
  //   edit:userSlice.reducer,
})

export default rootReducer;