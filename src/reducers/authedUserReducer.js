import { SET_AUTHED_USER } from '../actions/authedUserActions.js'

export default (state = null, action) => {
    switch (action.type) {

        case SET_AUTHED_USER:
            return action.payload.id;
    
        default:
            return state;
    };
};