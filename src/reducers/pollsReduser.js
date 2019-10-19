import { RECEIVE_POLLS } from '../actions/pollsActions.js'

export default function pollsRedusers (state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };
    
        default:
            return state;
    };
};