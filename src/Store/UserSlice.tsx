import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    number: string;
    status: string;
}

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        addUser (state, action)  {
            // throw new Error("I am From your slice");
            
            console.log(action.payload);
            state.users.push(action.payload);
            // state.users.push(action.payload);
        },
    },
});

export const  userActions  = userSlice.actions;

export default userSlice;
