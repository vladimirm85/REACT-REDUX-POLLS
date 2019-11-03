import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPercentage } from '../utils/helpers';
import E404 from '../components/404.js';
import { handleAddAnswer } from '../actions/answersAction.js';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

class Poll extends React.Component {

    handleAnswer = answer => {
        const { poll, authedUser } = this.props;

        this.answered = true;
        this.props.handleAddAnswer({
            authedUser,
            answer,
            id: poll.id
        });
    }

    render() {
        const { poll, vote, authorAvatar } = this.props;

        if (poll === null) {
            return <E404 />;
        };

        const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);
        const optionList = ['aText', 'bText', 'cText', 'dText'].map(key => {
            const count = poll[key[0] + 'Votes'].length;

            return (
                <li
                    key={key}
                    onClick={() => {
                        if (vote === null && !this.answered) {
                            this.handleAnswer(key[0]);
                        };
                    }}
                    className={`option ${vote === key[0] ? 'chosen' : ''}`}>
                    {vote === null
                        ? poll[key]
                        : <div className='result'>
                            <span>{poll[key]}</span>
                            <span>{getPercentage(count, totalVotes)}% ({count})</span>
                        </div>}
                </li>
            );
        });

        return (
            <div className='poll-container'>
                <h1 className='question'>
                    {poll.question}
                </h1>
                <div className='poll-author'>
                    By <img src={authorAvatar} alt="Author's avatar" />
                </div>
                <ul>
                    {optionList}
                </ul>
            </div>
        )
    }
};

Poll.propTypes = {
    authedUser: PropTypes.string.isRequired,
    polls: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
    const { id } = match.params;
    const poll = polls[id];

    if (!poll) {
        return {
            poll: null
        };
    };

    const vote = getVoteKeys().reduce((vote, key) => {
        if (vote !== null) {
            return vote[0];
        };

        return poll[key].includes(authedUser)
            ? key
            : vote
    }, null);

    return {
        poll,
        vote,
        authedUser,
        authorAvatar: users[poll.author].avatarURL
    };
};

const mapDispatchToProps = dispatch => ({
    handleAddAnswer: newAnswer => dispatch(handleAddAnswer(newAnswer))
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);