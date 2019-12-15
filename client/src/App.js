import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import UserRegistration from './pages/UserRegistration';
import MainNavigation from './Components/MainNavigation';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavigation />
        <main className='main-container'>
          <Switch>
            <Redirect from='/' to='/register' exact />
            <Route path='/register'  component={UserRegistration} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;