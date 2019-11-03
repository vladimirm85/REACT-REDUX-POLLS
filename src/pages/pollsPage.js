import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UrlBuild } from '../routes';

class Polls extends React.Component {
    state = {
        showAnswered: false
    };

    showUnaswered = () => {
        this.setState({ showAnswered: false });
    };

    showAnswered = () => {
        this.setState({ showAnswered: true });
    };


    render() {
        const { showAnswered } = this.state;
        const { answered, unanswered } = this.props;

        const polls = showAnswered
            ? answered
            : unanswered;

        const pollsList = polls.map(poll =>
            <li key={poll.id}>
                <Link to={UrlBuild('poll', {id: poll.id})}>
                    {poll.question}
                </Link>
            </li>);

        return (
            <div>
                <div className='dashboard-toggle'>
                    <button
                        style={{ textDecoration: !showAnswered ? 'underline' : null }}
                        onClick={this.showUnaswered}>
                        Unanswered
                    </button>
                    <span> | </span>
                    <button
                        style={{ textDecoration: showAnswered ? 'underline' : null }}
                        onClick={this.showAnswered}>
                        Answered
                    </button>
                </div>
                <ul className='dashboard-list'>
                    {pollsList}
                </ul>
            </div>
        );
    };
};

Polls.defaultProps = {
    authedUser: '',
    polls: [],
    users: []
}


Polls.propTypes = {
    authedUser: PropTypes.string,
    polls: PropTypes.array,
    users: PropTypes.array
};

function mapStateToProps({ polls, users, authedUser }) {
    const answers = users[authedUser].answers;

    const answered = answers.map((id) => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);

    const unanswered = Object.keys(polls)
        .filter((id) => !answers.includes(id))
        .map((id) => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Polls);