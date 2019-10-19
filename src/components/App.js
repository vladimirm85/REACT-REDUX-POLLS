import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/sharedActions.js'
import Dashboard from './Dashboard.js'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {this.props.loading
        ?null
        :<Dashboard/>}
      </div>
    );
  };
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);