// Create an action
export const addUser = (userData: any) => ({
    type: 'ADD_USER',
    payload: userData,
  });
  
  // Create a reducer
  const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      default:
        return state;
    }
  };
  