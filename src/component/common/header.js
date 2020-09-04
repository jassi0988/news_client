import React from 'react';
import history from '../../history';
import { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Home extends Component
{
  
    constructor(props) 
    {
        super(props);
        this.state = {
          category : [],
          login : []
        };
        const data = localStorage.getItem('loggedData')
        if(data === null)
        {
            this.state.login = false
            
        }

    }
    componentDidMount() {
      const url = 'https://backend-newz.herokuapp.com/api/user/categories'
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              category: result
            });
          },
        )  
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // body: JSON.stringify(fields)
      };

      fetch('http://backend-newz.herokuapp.com/api/admin/newsListByCategory', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.setState({                      
              news : data
              });
     
          });
        
        

    }

    signout()
    {
        localStorage.clear();
        this.state.login = false
        // this.forceUpdate()
        window.location.reload()

    }
    render() 
    {
<<<<<<< HEAD
      return (
        <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="/home/all">Montreal<i> Times</i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto"> 
          <li class="nav-item active"><a onClick={()=> history.push('/favourite')} class="nav-link">Favourites</a></li>
          {this.state.category.map((opt) =>(<li class="nav-item active"><a href={'/home/' + opt.name} class="nav-link">{opt.name}</a></li>))}
          <li class="nav-item"><a onClick={()=> history.push('/profile')} class="nav-link">Profile</a></li>
          <li class="nav-item"><a onClick={()=>{this.signout()}} class="nav-link">Signout</a></li> 
            
        </ul>
      </div>
    </div>
  </nav>
      )
=======
      if(this.state.login)
      {
        return (
          <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="/">Montreal<i> Times</i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto"> 
                <li class="nav-item active"><a onClick={()=> history.push('/favourite')} class="nav-link">Favourites</a></li>
                {this.state.category.map((opt) =>(<li class="nav-item active"><a href="#" class="nav-link">{opt.name}</a></li>))}
                <li class="nav-item"><a onClick={()=> history.push('/profile')} class="nav-link">Profile</a></li>
                <li class="nav-item"><a onClick={()=>{this.signout()}} class="nav-link">Signout</a></li> 
                  
              </ul>
            </div>
          </div>
          </nav>
        )
      }
      else{
        return (
          <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="/">Montreal<i> Times</i></a>
          </div>
          </nav>
        )
      }
>>>>>>> 324b70f20113dbd72e6ec6e780364a25bb14e5cb
    }
}
