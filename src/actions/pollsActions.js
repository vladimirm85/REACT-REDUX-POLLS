import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_POLLS = 'GET_POLLS';
export const getPolls = polls => {
    return {
        type: GET_POLLS,
        payload: {
            polls
        }
    };
};

export const ADD_POLL = 'ADD_POLL';
const addPoll = poll => {
    return {
        type: ADD_POLL,
        payload: {
            poll
        }
    };
};

export function handleAddPoll (poll) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return savePoll({
            ...poll,
            author: authedUser
        }).then(poll => dispatch(addPoll(poll)))
        .catch(error => console.log(error))
        .finally(() => dispatch(hideLoading()));
    };
};