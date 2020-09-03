import React from 'react';
import history from '../../history';
function Header() {
  return (
    <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="/">Montreal<i> Times</i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link">TRAVEL</a></li> 
        {/* <li class="nav-item active"><a onClick={()=> history.push('/favourite')} class="nav-link">Favourites</a></li> */}
          {/* {this.state.category.map((opt) =>(<li class="nav-item active"><a href="#" class="nav-link">{opt.name}</a></li>))} */}
          {/* <li class="nav-item active"><a href="#" class="nav-link">NEWS</a></li>
          <li class="nav-item"><a href="#" class="nav-link">TRAVEL</a></li>           
          <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li> */}
          {/* <li class="nav-item"><a onClick={()=> history.push('/profile')} class="nav-link">Profile</a></li> */}
          {/* <li class="nav-item"><a onClick={()=>{this.signout()}} class="nav-link">Signout</a></li> */}
            
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
