import {Redirect} from 'react-router-dom';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


export default class detail extends Component 
{

    constructor(props) 
    {
        super(props);
        this.state = {
          news: "",
          recent : ""
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
                        news : data.data,
                        recent : data.recent
                        }); 
                        console.log(this.state.recent)
            }); 
    }

    render() 
    {
    
        return ( 
            <div class="bk-white">
            <div class="container">
                
                <div class="row pd-top">
                {(this.state.news) &&
                    <div class="col-lg-8 ">
                    
                        <h1 class="mb-3">{this.state.news[0].title}</h1>
                            <img src={this.state.news[0].img} alt="newsimage" class="img-fluid mb-5" />
                        <h4 class="mb-3">{this.state.news[0].title_desc}</h4>
                        <div class="news-detail" dangerouslySetInnerHTML={{__html: this.state.news[0].description}} />
                    
                    </div>
                }
                    <div class="col-lg-4 sidebar pl-lg-5 e">
                        {/* <div class="sidebar-box ">
                            <div class="categories">
                            <h3>Categories</h3>
                            <li><a href="#">Illustration <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Branding <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Application <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Design <span class="ion-ios-arrow-forward"></span></a></li>
                            <li><a href="#">Marketing <span class="ion-ios-arrow-forward"></span></a></li>
                            </div>
                        </div> */}
                        <div class="sidebar-box">
                        <h3>Recent News</h3>
                        {(this.state.recent) &&
                        this.state.recent.map((opt) =>( 
                        <div class="block-21 mb-4 d-flex">
                           <img src={opt.img} alt="newsimage" class="blog-img mr-4" />
                            <div class="text">
                                <h3 class="heading"><a href={'/detail/' + opt.id}>{opt.title}</a></h3>
                                <div class="meta">
                                <div><a href="#"><span class="icon-person"></span> {opt.category_name}</a></div>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                    </div>

                   

                </div>
    
            </div>
        </div>
            
            ); 
    }
}