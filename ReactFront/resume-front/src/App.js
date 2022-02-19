import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import Profile from './pages/Profile'
import Work from './pages/Work';
import AddWork from './pages/AddWork'
import Education from './pages/Education';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/work" component={Work} />
        <Route path="/addwork" component={AddWork} />
        <Route path="/educate" component={Education} />
      </Switch>
    </Router>
  );
}

export default App;
