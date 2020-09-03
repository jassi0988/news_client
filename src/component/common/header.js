import React from 'react';
import history from '../../history';
import { Component } from 'react';

export default class Home extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
          category : []
        };

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

    render() 
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
}
