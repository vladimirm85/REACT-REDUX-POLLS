import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const ADD_ANSWER = 'ADD_ANSWER';
const addAnswer = ({ authedUser, id, answer }) => {
    return {
        type: ADD_ANSWER,
        payload: {
            authedUser,
            id,
            answer
        }
    };
};

export const handleAddAnswer = answerData => {
    return dispatch => {
        dispatch(showLoading());
        return savePollAnswer(answerData)
            .then(() => dispatch(addAnswer(answerData)))
            .catch(error => console.log(error))
            .finally(() => dispatch(hideLoading()));
    };
};