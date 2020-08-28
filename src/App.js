import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./component/signup.js";
import category from "./component/categories.js";
import Home from "./component/home.js";
import profile from "./component/profile.js";
import history from './history';
import {
  Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

function App() {
  return (
    <Router history={history}>       

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/category" component={category}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={profile}/>
      </Switch>
    </Router>
  );
}

export default App;
