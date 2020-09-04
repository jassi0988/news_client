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
            selectedArr  : [],
            redirect : false
            
        }
        this.state.firstname = this.state.userDetails[0].first_name
        this.state.lastname = this.state.userDetails[0].last_name
        this.state.email = this.state.userDetails[0].email_id
        this.state.category = this.state.userDetails[0].categories
        //this.state.newcat = this.state.category.split(',')
        // this.state.newcat = this.state.category.replace(/[&\/\\#+()$~%.'":*?<>{}]/g,'')
        // this.state.newcat.forEach(element => {
        //     this.state.newcat1.push(this.state.newcat.split(','))
        // });
        
        // this.state.newcat1 = this.state.newcat.split()
        

    }

    componentDidMount()
    {
    const url = 'https://backend-newz.herokuapp.com/api/user/categories'
    fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            userData: result
            });
        });
    }

    handleChange =(e)=>{
        this.setState({ [e.target.name]: e.target.value });
     }

    onChange = (event) => {       
        this.setState({
            value: [ ...event.target.value ]        
        });    
        this.setState({
            selectedId: [ ...event.target.value.map((opt) =>(opt.id)) ] 
        });   
    }
    call()
    {
       
        this.state.array=this.state.category.split(",")
         this.state.array.map((id) =>(                                    
            this.state.userData.map((userId) =>(
                userId.id===parseInt(id.replace(/[&\/\\#+()$~%.'":*?<>{}]/g,'')) && 
                this.setState({selectedArr :userId.name})
            ))
            ))
            console.log(this.state.selectedArr)
    }

    sendData = (e) =>  {
        e.preventDefault();
        
            let fields = {firstName:this.state.firstname,
                          lastName:this.state.lastname,
                          emailId:this.state.email,
                          categories : this.state.selectedId};      
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
            return <Redirect to='/home' />
        }
    return(
        
    <div class="section">
         <Header/>
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
                                            data={this.state.userData.map((opt,key) =>(
                                                opt                         
                                              ))}
                                            
                                            textField="name"
                                            dataItemKey="id"
                                            // onChange={this.onChange}
                                            // defaultValue={this.state.selectedArr}
                                            
                                                                                         
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