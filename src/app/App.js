import React from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink} from 'react-router-dom';
import routesList, { RoutesMap } from '../routes';
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
    console.log(routesComponent);
    
    return (
      <Router>
        <Switch>
          {this.props.loading
            ? <LoadingBar />
            :routesComponent}
        </Switch>
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