import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import UserRegistration from './pages/UserRegistration'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from='/' to='/register' exact />
          <Route path='/register'  component={UserRegistration} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;