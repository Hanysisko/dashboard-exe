import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
  usersData: [],
  hiddenDelete: true,
  userToDeleteData: [],
  newUser: [],
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
          userPosition => userPosition.id !== state.userToDeleteData.id
        )
      }

    case UserActionTypes.USER_TO_DELETE:
      return{
        ...state,
        userToDeleteData: action.payload,
    }

    case UserActionTypes.TOGGLE_DELETE_HIDDEN:
      return{
        ...state,
        hiddenDelete: !state.hiddenDelete,
    }

    case UserActionTypes.ADD_USER:
      return{
        ...state,
        newUser: action.payload
    }


    default:
      return state;
  }
};

export default userReducer;