import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Leaderboard = ({ users }) =>
    <ul>
        {users.map(user => (
            <li className='user' key={user.id}>
                <img src={user.avatarURL}
                     alt={`Avatar for ${user.name}`}
                />
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.polls} Polls</p>
                    <p>{user.answers} Answers</p>
                </div>
            </li>
        ))}
    </ul>;

Leaderboard.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateProps = ({ users }) => {
    return {
        users: Object.keys(users)
            .map(id => {
                const { name, avatarURL, polls, answers } = users[id];

                return {
                    id,
                    name,
                    avatarURL,
                    polls: polls.length,
                    answers: answers.length
                };
            })
            .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
    };
};

export default connect(mapStateProps)(Leaderboard);