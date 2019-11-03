import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux';
import polls from './pollsReducer.js';
import users from './usersReducer.js';
import authedUser from './authedUserReducer.js';

export default combineReducers({
    polls,
    users,
    authedUser,
    loadingBar: loadingBarReducer
});