import { SET_AUTHED_USER } from '../actions/authedUserActions.js'

export default function authedUserReduser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
    
        default:
            return state;
    };
};