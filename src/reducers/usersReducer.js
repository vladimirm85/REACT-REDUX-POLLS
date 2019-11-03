import { GET_USERS } from '../actions/usersActions.js';
import { ADD_POLL } from '../actions/pollsActions.js';
import { ADD_ANSWER } from '../actions/answersAction.js';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                ...action.payload.users
            };

        case ADD_POLL:
            const poll = action.payload.poll
            const { author, id } = poll
            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id])
                }
            };

        case ADD_ANSWER:
            const { authedUser } = action.payload;
            const user = state[authedUser];
            return {
                ...state,
                [authedUser]: {
                    ...user,
                    answers: user.answers.concat([action.payload.id])
                }
            };

        default:
            return state;
    };
};