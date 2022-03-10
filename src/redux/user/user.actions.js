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