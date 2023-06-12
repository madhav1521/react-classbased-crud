import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DELETE_USER } from '../actions/actions';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    status: string;
}

interface UserState {
    data: any;
    selectedRows: any;
    users: User[];
}

const initialState: UserState = {
    users: [],
    selectedRows: undefined,
    data: undefined,
    // contents: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        addUser (state, action)  {  
            console.log(action.payload);
            state.users.push(action.payload);
            // throw new Error("I am add From your slice");
        },
        deleteUser (state,action) {
            console.log(action.payload);
            state.users.push(action.payload);
            const userId = action.payload;
            // return state.filter((user: { id: any; }) => user.id !== userId);
            throw new Error("I am delete From your slice");
        },
        // editUser (state,action) {
        //     console.log(action.payload);
        //     state.users.push(action.payload);
        //     throw new Error("I am edit From your slice");
        // },
        // editContent: (state, action) => {
        //     const { contentId, updatedData } = action.payload;
        //     const updatedContents = state.users.map(content => {
        //       if (content.id === contentId) {
        //         return {
        //           ...content,
        //           ...updatedData,
        //         };
        //       }
        //       return content;
        //     });
        //     state.users = updatedContents;
        //   },
    },
});
// export const { editContent } = userSlice.actions;
// const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
//   switch (action.type) {
//     case DELETE_USER:
//       const userId = action.payload;
//       const updatedUsers = state.users.filter((user) => user.id !== userId);
//       return {
//         ...state,
//         users: updatedUsers,
//       };
//     // other cases
//     default:
//       return state;
//   }
// };
const userReducer = userSlice.reducer
export const  userActions  = userSlice.actions;

export const { addUser, deleteUser } = userSlice.actions;
export default userReducer;
