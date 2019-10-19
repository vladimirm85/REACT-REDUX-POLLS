import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    state = {
        showAnswered: false
    };
    render() {
        console.log(this.props);
        
        return (
            <div>
                Dashboard
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

export default connect(mapStateToProps)(Dashboard);