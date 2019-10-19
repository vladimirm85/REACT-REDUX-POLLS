import { getInitialData } from '../utils/api.js';
import { receivePolls } from './pollsActions.js';
import { receiveUsers } from './usersActions.js';
import { setAuthedUser } from './authedUserActions.js';
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov';

export function handleInitialData () {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData().then(({users, polls}) => {
            dispatch(receivePolls(polls));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading());
        });
    };
};