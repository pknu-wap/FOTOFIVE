import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './components/views/MainPage/MainPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import PhotoUploadPage from './components/views/PhotoUploadPage/PhotoUploadPage'

function App() {
  return (
    <Router>
    <div id="background">
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/register" component={RegisterPage} />

        <Route exact path="/upload" component={PhotoUploadPage} />

        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
