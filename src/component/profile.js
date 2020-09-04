import React, { Component, useCallback  } from 'react';
import '../category.css';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom';
import Header from './common/header'
import { useImperativeHandle } from 'react';
const sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];
export default class profile extends Component
{
    
    constructor(props)
    {
        console.log("constructor")
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
            newcat1 : "",
            usercategory : [],
            array : [],
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            selectedId : [],
            selectedIds : [],
            selectedArr  : [],
            redirect : false,
            id : ""
            
            
        }
        this.state.id = this.state.userDetails[0].id
        this.state.firstname = this.state.userDetails[0].first_name
        this.state.lastname = this.state.userDetails[0].last_name
        this.state.email = this.state.userDetails[0].email_id
        this.state.category = this.state.userDetails[0].categories


    }

    componentDidMount()
    {
        
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
                    parseInt(userId.id)===parseInt(id.replace(/[&\/\\#+()$~%.'":*?<>{}]/g,''))
                    && 
                    this.setState({selectedArr : this.state.selectedArr.concat(userId.name)})                            
                ))                            
            ))
            },
          )
    }

    // handleChange = (event) => {
    //     this.setState({
    //         value: event.target.value
    //     });
    // }

    onChange = (event) => {      
        this.setState({
            selectedArr: [ ...event.target.value ]        
        });    
        this.setState({
            selectedId: [ ...event.target.value.map((opt) =>(opt)) ] 
        });
    }
    

    sendData = (e) =>  {
        e.preventDefault();
            this.state.userData.forEach(element => {
                console.log(element)
                this.state.selectedArr.forEach(e => {
                    if(element.name===e){
                    console.log(element.id)
                    this.state.selectedIds.push(element.id);
                    }
                    // this.state.selectedId.push(element.id);
                });
            });
            let fields = {
                        id : this.state.id,
                        first_name:this.state.firstname,
                          last_name:this.state.lastname,
                          email_id:this.state.email,
                          categories : this.state.selectedIds}; 
                          
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fields)
            };
      
            fetch('https://backend-newz.herokuapp.com/api/user/updateUser', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.status === 200){
                      
                        localStorage.setItem('loggedData', JSON.stringify(data.data)); 
                        toast("You data is sucessfully updated")             
                        this.setState({
                            redirect : true
                          });
                    }else{
                      toast(data.message);
                    }
                  
                }); 
              
      }


    render()
    {
        
        if(this.state.redirect)
        {
            return <Redirect to='/home/all' />
        }
    return(
        
    <div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12  align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2">  
                <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper"></div>
                <div>
                    <div class="center-wrap">
                        <div class="section">
                        <form onSubmit={this.sendData}>
                            <h4 class="mb-4 pb-3">Profile</h4>
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstname" class="form-style"
                                    placeholder="Your First Name" id="logname" autocomplete="off" value={this.state.firstname} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                            <label>Last Name</label>
                                <input type="text" name="lastname" class="form-style"
                                    placeholder="Your Last Name" id="logname" autocomplete="off" value={this.state.lastname} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                            <label>Email</label>
                                <input type="email" name="email" class="form-style"
                                    placeholder="Your Email" id="logemail" autocomplete="off" value={this.state.email} onChange={this.handleChange}/>
                                <i class="input-icon uil uil-at"></i>
                            </div>
                                    <div class="form-group mt-2">
                                    <label>Categories</label>
                                        <MultiSelect
                                            data={this.state.userData.map((opt)=>(
                                                opt.name
                                            ))}
                                            
                                            
                                            
                                            onChange={this.onChange}  
                                            value = {this.state.selectedArr}
                                                                                         
                                        />
                                    </div>
                            <div class="form-group mt-2">
                            <button type="submit" className="btn mt-4" >Submit</button> 
                            </div>
                            
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