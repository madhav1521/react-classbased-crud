import { combineReducers } from "@reduxjs/toolkit";
// // Create a reducer
// const initialState = {
//   users: [],
//   contents:[]
// };

// Create an action
export const addUser = (userData: any) => ({
  type: 'ADD_USER',
  payload: userData,
});


export const editUser = (contentId: any, updatedData: any) => {
  return {
    type: 'EDIT_USER',
    payload: {
      contentId,
      updatedData
    }
  };
};

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (id: any) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};




