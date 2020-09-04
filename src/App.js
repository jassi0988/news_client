import React from 'react';
import './App.css';
import Login from "./component/signup.js";
import category from "./component/categories.js";
import Home from "./component/home.js";
import profile from "./component/profile.js";
import favourite from "./component/favourite.js";
import detail from "./component/detail.js";
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
        <Route path="/home/:name" component={Home}/>
        <Route path="/profile" component={profile}/>
        <Route path="/favourite" component={favourite}/>
        <Route path="/detail/:id" component={detail}/>
      </Switch>
    </Router>
  );
}

export default App;
