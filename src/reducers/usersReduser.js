import { RECEIVE_USERS } from '../actions/usersActions.js'

export default function usersReduser (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
    
        default:
            return state;
    };
};