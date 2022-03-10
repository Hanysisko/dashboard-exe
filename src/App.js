import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import AddUserPage from './pages/adduserpage/adduserpage.component.jsx';

import { fetchUsers } from '../src/redux/user/fetchUserData.js';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
 
  render() {
    return(
      <div>

        <h1>Dashboard</h1>
        <div></div>

        <Switch>

          <Route exact path={'/dashboard-exe'} component={ HomePage }>
            <Redirect to={'/'}/>
          </Route>
          <Route exact path={'/'} component={ HomePage }/>
          <Route exact path={'/add-user'} component={ AddUserPage }/>

        </Switch>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  users: state.users.usersData
});

export default connect(mapStateToProps)(App);
