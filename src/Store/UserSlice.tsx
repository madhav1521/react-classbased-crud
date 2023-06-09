import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
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
        addUser (state, action: PayloadAction<User>)  {
            state.users.push(action.payload);
        },
    },
});

export const  userActions  = userSlice.actions;

export default userSlice;
