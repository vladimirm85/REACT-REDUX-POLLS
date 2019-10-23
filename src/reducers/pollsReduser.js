import { RECEIVE_POLLS, ADD_POLL } from '../actions/pollsActions.js'
import { ADD_ANSWER } from '../actions/answersAction.js';

export default function pollsRedusers(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };

        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll
            };

        case ADD_ANSWER:
            const { answer, id, authedUser } = action;
            const poll = state[id];
            const votesKey = answer + 'Votes';
            return {
                ...state,
                [action.id]: {
                    ...poll,
                    [votesKey]: poll[votesKey].concat([authedUser])
                }
            };

        default:
            return state;
    };
};