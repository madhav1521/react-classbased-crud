import { combineReducers } from 'redux';
import AddEdit from './AddEdit';
import userSlice, { addUser, deleteUser } from '../Store/UserSlice';

const rootReducer = combineReducers({
  user:userSlice,
  edit:userSlice,
  delete:userSlice,
  // content:userSlice.reducer
})
export type RootState = ReturnType<typeof rootReducer>;

export { addUser, deleteUser };
export default rootReducer;