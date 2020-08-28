import React, { Component  } from 'react';
import '../category.css';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom';
const sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];
export default class profile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            userData : [],
            userDetails : JSON.parse(localStorage.getItem('loggedData')),
            firstname: "",
            lastname: "",
            email: "",
            password : "",
            category :  "",
            newcat : "",
            newcat1 : ""
            
        }
        this.state.firstname = this.state.userDetails[0].first_name
        this.state.lastname = this.state.userDetails[0].last_name
        this.state.email = this.state.userDetails[0].email_id
        this.state.category = this.state.userDetails[0].categories
        this.state.newcat = this.state.category.split(',')
        this.state.newcat1 = this.state.newcat.join()

    }

    componentDidMount()
    {
    const url = 'https://backend-newz.herokuapp.com/api/user/categories'
    fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            userData: (result)
            });
        },
        )           
    }

    handleChange =(e)=>{
        this.setState({ [e.target.name]: e.target.value });
     }

    onChange = (event) => {       
        this.setState({
            value: [ ...event.target.value ]        
        });        
    }
    render()
    {
       
    this.state.userData.map((opt,key) =>(
        opt                            
    ))
    console.log(this.state.newcat)
    // this.state.newcat.map((opt,key) =>(
    //     console.log("//////////"+opt)                            
    // ))

    return(
    <div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">  
                <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper"></div>
                <div>
                    <div class="center-wrap">
                        <div class="section text-center">
                        <form onSubmit="">
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                            <div class="form-group">
                                <input type="text" name="firstname" class="form-style"
                                    placeholder="Your First Name" id="logname" autocomplete="off" value={this.state.firstname} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                                <input type="text" name="lastname" class="form-style"
                                    placeholder="Your Last Name" id="logname" autocomplete="off" value={this.state.lastname} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                                <input type="email" name="email" class="form-style"
                                    placeholder="Your Email" id="logemail" autocomplete="off" value={this.state.email} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-at"></i>
                            </div>
                            <span >
                                <div className="example-wrapper">
                                    <div class="category">
                                        <MultiSelect
                                            data={sports}
                                            onChange={this.onChange}
                                            // textField="name"
                                            // dataItemKey="id"
                                            value={this.state.value}                                               
                                        />
                                    </div>
                                </div>
                            </span>
                            <button type="submit" className="btn mt-4" >Submit</button>
                        </form>    
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
    }
}