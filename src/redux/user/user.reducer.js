import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
  usersData: [],
  hiddenDelete: true,
  userIdToDelete: ''
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

    case UserActionTypes.REMOVE_USER:
      return {
        ...state,
        usersData: state.usersData.filter(
          userPosition => userPosition.id !== action.payload.id
        )
      }

    case UserActionTypes.USER_TO_DELETE:
      return{
        ...state,
        hiddenDelete: !state.hiddenDelete,
    }


    default:
      return state;
  }
};

export default userReducer;