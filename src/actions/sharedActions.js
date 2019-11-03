import { getInitialData } from '../utils/api.js';
import { getPolls } from './pollsActions.js';
import { getUsers } from './usersActions.js';
import { setAuthedUser } from './authedUserActions.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const AUTHED_ID = 'dan_abramov';

export const handleInitialData = () => {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData().then(({users, polls}) => {
            dispatch(getPolls(polls));
            dispatch(getUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
        }).catch(error => console.log(error))
        .finally(() => dispatch(hideLoading()));
    };
};