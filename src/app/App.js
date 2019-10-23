import React from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink} from 'react-router-dom';
import routesList from '../routes';
import { handleInitialData } from '../actions/sharedActions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const routesComponent = routesList.map(route => 
      <Route
        path={route.url}
        component={route.component}
        exact={route.exact}
        key={route.url}
      />
    );
    
    return (
      <Router>
        <LoadingBar />
        <div className='container'>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/addpoll' activeClassName='active'>
                  Add Poll
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            {this.props.loading
            ? null
            :routesComponent}  
          </Switch>
        </div>
      </Router>
    );
  };
};

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);