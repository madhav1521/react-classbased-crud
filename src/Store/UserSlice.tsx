import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        // deleteUser (state,action) {
        //     console.log(action.payload);
        //     state.users.push(action.payload);
        //     throw new Error("I am delete From your slice");
        // },
        // editUser (state,action) {
        //     console.log(action.payload);
        //     state.users.push(action.payload);
        //     throw new Error("I am edit From your slice");
        // },
        editContent: (state, action) => {
            const { contentId, updatedData } = action.payload;
            const updatedContents = state.users.map(content => {
              if (content.id === contentId) {
                return {
                  ...content,
                  ...updatedData,
                };
              }
              return content;
            });
            state.users = updatedContents;
          },
    },
});
// export const { editContent } = userSlice.actions;

export const  userActions  = userSlice.actions;

export default userSlice;
