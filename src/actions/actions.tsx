// // Create an action
// export const addUser = (userData: any) => ({
//     type: 'ADD_USER',
//     payload: userData,
//   });
  
//   // Create a reducer
//   const initialState = {
//     users: [],
//   };
  
//   const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
//     switch (action.type) {
//       case 'ADD_USER':
//         console.log(action.payload);
      
//         return {
//           ...state,
//           users: [...state.users, action.payload],
//         };
//       default:
//         return state;
//     }
//   };

import React from 'react'

function actions() {
  return (
    <div>actions</div>
  )
}

export default actions
  