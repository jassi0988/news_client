import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./component/signup.js";
import category from "./component/categories.js";
import Home from "./component/home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

function App() {
  return (
    <Router>       

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/category" component={category}/>
        <Route path="/Login" component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
