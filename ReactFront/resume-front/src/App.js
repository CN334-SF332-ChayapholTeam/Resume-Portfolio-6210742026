import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import Profile from './pages/Profile'
import Work from './pages/Work';
import AddWork from './pages/AddWork'
import Education from './pages/Education';
import EditProject from './pages/EditProject';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/work" component={Work} />
        <Route path="/addwork" component={AddWork} />
        <Route path="/educate" component={Education} />
        <Route path="/edit-project/:id" component={EditProject} />
      </Switch>
    </Router>
  );
}

export default App;
