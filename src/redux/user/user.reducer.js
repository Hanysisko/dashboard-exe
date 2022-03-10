import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
  usersData: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case UserActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
      }
      
    case UserActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
      }


    default:
      return state;
  }
};

export default userReducer;