import React, { Component  } from 'react';
import {Redirect} from 'react-router-dom';
import '../home.css';
import history from './../history';
export default class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            login : true ,
            dummy :JSON.parse(localStorage.getItem('loggedData'))
        };
        const data = localStorage.getItem('loggedData')
        
        if(data === null)
        {
            this.state.login = false 
        }
    }

    signout()
    {
        localStorage.clear();
        this.state.login = false
        this.forceUpdate()

    }
render() 
{
    const styleRed = { backgroundImage: "url('images/bg_main.jpg')",height:"566px" };
    if (!this.state.login) {
        return <Redirect to='/Login' />
    }
  return (
    <div class="bk-white">
	  <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="home.html">Montreal<i> Times</i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="#" class="nav-link">NEWS</a></li>
            <li class="nav-item"><a href="#" class="nav-link">TRAVEL</a></li>
            <li class="nav-item"><a onClick={()=> history.push('/profile')} class="nav-link">ProfileK</a></li>
            <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
            <li class="nav-item"><a onClick={()=>{this.signout()}} class="nav-link">SIGN OUT</a></li>
              
          </ul>
        </div>
      </div>
    </nav>
        <div class="hero-wrap js-fullheight" style={styleRed} data-stellar-background-ratio="0.5">
        {/* <div class="hero-wrap js-fullheight"  data-stellar-background-ratio="0.5"> */}
            <div class="overlay"></div>
            <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                <div class="col-md-12">
                    <h2 class="subheading">Welcome, %user%</h2>
                    <h1 class="mb-4 mb-md-0">MontrealTimes</h1>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="text">
                                <p>Montreal Times gives the best news available on the internet for Montreal city, Quebec. Explore from various restaurants and places to be at. Discover new locations in your own province! </p>
                                <div class="mouse">
                                            <a href="#" class="mouse-icon">
                                                <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                                            </a>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
           	<section class="ftco-section">
   		<div class="container">
   			<div class="row">
   				<div class="col-md-12">
   					<div class="case">
   						<div class="row">
   							<div class="col-md-6 col-lg-6 col-xl-8 d-flex">
                                   <img  class="img w-100 mb-3 mb-md-0" src="images/image_2.jpg"/>
                                   {/* <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
   								{/* <a href="blog-single.html" class="img w-100 mb-3 mb-md-0" style="background-image: url(images/image_1.jpg);"></a> */}
   							</div>
   							<div class="col-md-6 col-lg-6 col-xl-4 d-flex">
   								<div class="text w-100 pl-md-3">
   									<span class="subheading">Illustration</span>
   									<h2><a href="blog-single.html">Eat your favourite poutine at your favourite restaurant today!</a></h2>
   									<ul class="media-social list-unstyled">
			                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
			                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
			                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
			              </ul>
   									<div class="meta">
   										<p class="mb-0"><a href="#">11/13/2019</a> | <a href="#">12 min read</a></p>
   									</div>
   								</div>
   							</div>
   						</div>
   					</div>
   				</div>
   			</div>
   			<div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
   		</div>
   	</section>
   </div>
  )
}
}