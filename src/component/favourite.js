import '../category.css';
import {Redirect} from 'react-router-dom';
import React,{ Component } from 'react';
import '../home.css';
import ReactDOM from 'react-dom';


export default class favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: [],
          login: true,
          redirect : false ,
          userDetails : JSON.parse(localStorage.getItem('loggedData')),
          category : [],
          array : [],
          usercategory : [],
          news : []
        };
      }

    //fetching list from databse
    componentDidMount() {
        this.state.category = this.state.userDetails[0].categories
        const url = 'https://backend-newz.herokuapp.com/api/user/categories'
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                userData: result
              });
              this.state.array = this.state.category.split(",")
              result.map((userId) =>(
                this.state.array.map((id) =>(
                    userId.id===id.replace(/[&\/\\#+()$~%.'":*?<>{}]/g,'') && 
                    this.setState({usercategory : this.state.usercategory.concat(userId.name)})                            
                ))                            
            ))
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
      // const styleRed = { backgroundImage: "url('images/bg_main.jpg')",height:"566px" };
      console.log(this.state.usercategory);
        return ( 
    <div class="bk-white">
      <div class="container">
   			<div class="row  pd-top">
   				<div class="col-md-12">
   					<div class="case">
               {this.state.news.map((opt) =>(
                                                                 
              this.state.usercategory.map((cat) =>(   
              cat===opt.category_name &&        
   						<div class="row">
   							<div class="col-md-6 col-lg-6 col-xl-8 d-flex">
                                   <img  class="img w-100 mb-3 mb-md-0" alt="newsImage" src={opt.img}/>
                                   {/* <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
   								{/* <a href="blog-single.html" class="img w-100 mb-3 mb-md-0" style="background-image: url(images/image_1.jpg);"></a> */}
   							</div>
   							<div class="col-md-6 col-lg-6 col-xl-4 d-flex">
   								<div class="text w-100 pl-md-3">
                      <span class="subheading">{opt.category_name}</span>
                        <h2><a href={'/detail/' + opt.id}>{opt.title}</a></h2>
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
              ))
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
   		</div>
            ); 
    }
}