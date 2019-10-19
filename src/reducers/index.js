import polls from './pollsReduser.js';
import users from './usersReduser.js';
import authedUser from './authedUserReduser.js';
import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux';

export default combineReducers({
    polls,
    users,
    authedUser,
    loadingBar: loadingBarReducer
});