import React from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import routesList from '../routes';
import { handleInitialData } from '../actions/sharedActions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const routesComponent = routesList.map(route => 
      <Route
        path={route.url}
        component={route.component}
        exact={route.exact}
        key={route.url} />
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
            {!this.props.isloaded
            ? null
            :routesComponent}  
          </Switch>
        </div>
      </Router>
    );
  };
};

App.defaultProps = {
    loadingBar: {
        default: 2
    }
}

App.propTypes = {
    loadingBar: PropTypes.object
};

const mapStateToProps = ({ loadingBar }) => ({
    isloaded: loadingBar.default === 0,
});

const mapDispatchToProps = dispatch => ({
    handleInitialData: () => dispatch(handleInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);