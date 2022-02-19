import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import Profile from './pages/Profile'
import Work from './pages/Work';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/work" component={Work} />
      </Switch>
    </Router>
  );
}

export default App;
