import React, { Component  } from 'react';
import {Redirect} from 'react-router-dom';
import '../home.css';
import history from './../history';
import Header from './common/header'
export default class Home extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
          category : [],
          news : [],
            login : true ,
            dummy :JSON.parse(localStorage.getItem('loggedData'))
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
              console.log(this.state.news)
              
              // if(data.status === 200){  
              //   alert("h")       
              //     this.setState({                      
              //       news : data
              //       });
              //       console.log(this.state.news)
                    
              // }else{
              //     // toast(data.message);
              // }
            
          });
        
        

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
        <Header/>
        <div class="hero-wrap js-fullheight" style={styleRed} data-stellar-background-ratio="0.5">
        {/* <div class="hero-wrap js-fullheight"  data-stellar-background-ratio="0.5"> */}
            <div class="overlay"></div>
            <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                <div class="col-md-12">
  <h2 class="subheading">Welcome, {}</h2>
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
               {this.state.news.map((opt) =>(
                                                                 
                                  
   						<div class="row">
   							<div class="col-md-6 col-lg-6 col-xl-8 d-flex">
                                   <img  class="img w-100 mb-3 mb-md-0" src={opt.img}/>
                                   {/* <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
   								{/* <a href="blog-single.html" class="img w-100 mb-3 mb-md-0" style="background-image: url(images/image_1.jpg);"></a> */}
   							</div>
   							<div class="col-md-6 col-lg-6 col-xl-4 d-flex">
   								<div class="text w-100 pl-md-3">
                      <span class="subheading">{opt.category_name}</span>
                        <h2><a onClick={()=>history.push('/detail/'+opt.id)}>{opt.title}</a></h2>
   									<ul class="media-social list-unstyled">
			                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
			                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
			                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
			              </ul>
   									<div class="meta">
   										<p class="mb-0"><a href="#">{opt.created_at.toString()}</a></p>
   									</div>
   								</div>
   							</div>
   						</div>

                ))}
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