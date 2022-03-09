import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import AddUserPage from './pages/adduserpage/adduserpage.component.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      users: []
    };

  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(response => response.json())
    .then(users => this.setState({ users:users }))
  }
 
  render() {
    return(
      <div>

        <h1>Dashboard</h1>

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



export default App;
