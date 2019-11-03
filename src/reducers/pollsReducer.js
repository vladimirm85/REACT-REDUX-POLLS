import { GET_POLLS, ADD_POLL } from '../actions/pollsActions.js'
import { ADD_ANSWER } from '../actions/answersAction.js';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_POLLS:
            return {
                ...state,
                ...action.payload.polls
            };

        case ADD_POLL:
            return {
                ...state,
                [action.payload.poll.id]: action.payload.poll
            };

        case ADD_ANSWER:
            const { answer, id, authedUser } = action.payload;
            const poll = state[id];
            const votesKey = answer + 'Votes';
            return {
                ...state,
                [id]: {
                    ...poll,
                    [votesKey]: poll[votesKey].concat([authedUser])
                }
            };

        default:
            return state;
    };
};