import polls from './pollsReduser.js';
import users from './usersReduser.js';
import authedUser from './authedUserReduser.js';
import { combineReducers } from 'redux';

export default combineReducers({
    polls,
    users,
    authedUser
});