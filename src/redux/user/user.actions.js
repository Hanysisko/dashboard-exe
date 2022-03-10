import { UserActionTypes } from './user.types.js';

// export const fetchUsers = (users) => ({
//   type: UserActionTypes.FETCH_USERS,
//   payload: users
// });

export const fetchDataRequest = () => ({
    type: UserActionTypes.FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (item) => ({
    type: UserActionTypes.FETCH_DATA_SUCCESS,
    payload: item
});

export const toggleDeleteHidden = () => ({
  type: UserActionTypes.USER_TO_DELETE
});

export const removeUser = (item) => ({
  type: UserActionTypes.REMOVE_USER,
  payload: item
});