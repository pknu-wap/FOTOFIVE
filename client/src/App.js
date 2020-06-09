import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RandingPage from './components/views/RandingPage/RandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import PhotoUploadPage from './components/views/PhotoUploadPage/PhotoUploadPage'
import Auth from './hoc/auth'
import CartPage from './components/views/CartPage/CartPage';

function App() {
  return (
    <Router>
    <div>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={Auth(RandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/photo/upload" component={Auth(PhotoUploadPage, true)} />
        <Route exact path="/user/cart" component={Auth(CartPage, true)} />

      </Switch>
    </div>
  </Router>
  );
}

export default App;
