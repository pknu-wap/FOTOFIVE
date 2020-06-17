import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import PhotoUploadPage from './components/views/PhotoUploadPage/PhotoUploadPage'
import Auth from './hoc/auth'
import CartPage from './components/views/CartPage/CartPage';
import PhotoDetailPage from './components/views/PhotoDetailPage/PhotoDetailPage';


function App() {
  return (
    <Router>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}


      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/photo/upload" component={Auth(PhotoUploadPage, true)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/photo/:photoId" component={Auth(PhotoDetailPage, null)} />

        </Switch>
      </div>


    </Router>
  );
}

export default App;
