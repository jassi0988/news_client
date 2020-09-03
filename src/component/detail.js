import {Redirect} from 'react-router-dom';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


export default class detail extends Component 
{

    constructor(props) 
    {
        super(props);
        this.state = {
          news: ""
        };
    }

    componentDidMount() 
    {    
         const id= {id:parseInt(this.props.match.params.id)}
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
            };

            fetch('https://backend-newz.herokuapp.com/api/user/newsDetails', requestOptions)
            .then(response => response.json())
            .then(data => {                                
                    this.setState({                      
                        news : data.data
                        }); 
            }); 
    }

    render() 
    {
    
        return ( 
            <div class="container bk-white">
                
                <div class="row">
                {(this.state.news) &&
                    <div class="col-lg-8 ">
                    
                <h2 class="mb-3">{this.state.news[0].title}</h2>
                    <img src={this.state.news[0].img} class="img-fluid mb-5" />
                <h2 class="mb-3">{this.state.news[0].title_desc}</h2>
                <p dangerouslySetInnerHTML={{__html: this.state.news[0].description}} />
                    
                    </div>
                }
                    <div class="col-lg-4 sidebar pl-lg-5 e">
                        <div class="sidebar-box ">
                            <div class="categories">
                            <h3>Categories</h3>
                            <li><a href="#">Illustration <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Branding <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Application <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Design <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Marketing <span class="ion-ios-arrow-forward"></span></a></li>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-box">
                        <h3>Recent Blog</h3>
                        <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4"></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">MontrealTimes gives latest news in the city!</a></h3>
                            <div class="meta">
                            <div><a href="#"><span class="icon-calendar"></span> Nov. 14, 2019</a></div>
                            <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                            <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
    
            </div>
            
            ); 
    }
}