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
            state.users.push(action.payload);
            console.log(action.payload);
        },
        deleteUser(state, action) {
            const userId = action.payload;
            const updatedUsers = state.users.filter(user => user.id !== userId);
            console.log('delete user', updatedUsers)
            return {
                ...state,
                users: updatedUsers
            };
        },
        editUser: (state, action) => {
            const { userId, updatedData } = action.payload;
            const updatedContents = state.users.map(content => {
                if (content.id === userId) {
                    return {
                        ...content,
                        ...updatedData,
                    };
                }
                return content;
            });
            state.users = updatedContents;
        },
        // editUser (state,action) {
        //     console.log(action.payload);
        //     state.users.push(action.payload);
        //     throw new Error("I am edit From your slice");
        // },
    },
});
const userReducer = userSlice.reducer
export const  userActions  = userSlice.actions;

export const { addUser, deleteUser,editUser } = userSlice.actions;
export default userReducer;
