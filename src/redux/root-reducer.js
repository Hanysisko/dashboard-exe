import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './user/user.reducer.js';

export default combineReducers({
  users: userReducer,
  form: formReducer
});