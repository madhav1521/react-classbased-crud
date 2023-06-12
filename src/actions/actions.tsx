import { combineReducers } from "@reduxjs/toolkit";

// Create an action
export const addUser = (userData: any) => ({
  type: 'ADD_USER',
  payload: userData,
});

// Create a reducer
const initialState = {
  users: [],
  contents:[]
};

export const editUser = (contentId: any, updatedData: any) => {
  return {
    type: 'EDIT_CONTENT',
    payload: {
      contentId,
      updatedData
    }
  };
};

export const DELETE_USER = 'DELETE_USER';

// Action creator function
export const deleteUser = (id: any) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
// export const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
//   switch (action.type) {
//     case 'ADD_USER':
//       console.log(action.payload);

//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
// contentReducer,
// userReducer
// });

// export default rootReducer;



