import React, { createElement, Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, Link, BrowserRouter,Redirect } from 'react-router-dom'
import SignIn from './components/login'

class App extends Component {
  state = {}
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/register" />
          <Route path="/" exact />
          <Route path="/speakers" />
          <Route path="/speaker" />
          <Route path="/speaker/edit/:id" />
          <Route path="/events"  />
          <Route path="/event"  />
          <Route path="/event/:id"  />
          <Route path="/profile"  />
        </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
