// actions.ts
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  status: string;
}

export interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: number; // user ID
}

export type UserActionTypes = AddUserAction | UpdateUserAction | DeleteUserAction;

export const addUser = (user: User): UserActionTypes => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user: User): UserActionTypes => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (id: number): UserActionTypes => ({
  type: DELETE_USER,
  payload: id,
});
