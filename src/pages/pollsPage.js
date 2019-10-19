import React from 'react';
import { connect } from 'react-redux';

class Polls extends React.Component {
    state = {
        showAnswered: false
    };

    showUnaswered = () => {
        this.setState({showAnswered: false});
    };

    showAnswered = () => {
        this.setState({showAnswered: true});
    };


    render() {
        const { showAnswered } = this.state
        const { answered, unanswered } = this.props
    
        const polls = showAnswered === true
            ? answered
            : unanswered;

        const pollsList = polls.map(poll => <li key={poll.id}>{poll.question}</li>);
        
        return (
            <div>
                <div className='dashboard-toggle'>
                    <button
                        style={{textDecoration: showAnswered === false ? 'underline' : null}}
                        onClick={this.showUnaswered}
                    >
                        Unanswered
                    </button>
                    <span> | </span>
                    <button
                        style={{textDecoration: showAnswered === true ? 'underline' : null}}
                        onClick={this.showAnswered}
                    >
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

function mapStateToProps ({ polls, users, authedUser }) {
    const answers = users[authedUser].answers;

    const answered = answers.map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp)

    const unanswered = Object.keys(polls)
        .filter((id) => !answers.includes(id))
        .map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp)
    
    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Polls);