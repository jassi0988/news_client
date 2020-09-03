import React, { Component  } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAt,faLock,faUser} from '@fortawesome/free-solid-svg-icons'
toast.configure({
    autoClose: 1700,
    draggable: false,
  });

export default class Login extends Component{
    constructor(props) { 
        super(props);
        this.state = {
            fields: {},
            login_email:'',
            login_password:'',
            signup_firstname:'',
            signup_lastname:'',
            signup_email:'',
            signup_password:'',
            login : true ,
            redirect_home : false,
            redirect_category : false,
            emailError: "",
            passswordError : "",
            flag: 0
        };
     
        const data = localStorage.getItem('loggedData')
        
        if(data === null)
        {
            this.state.login = false 
        }
}

handleChange =(e)=>{
     this.setState({ [e.target.name]: e.target.value });
  }

validateLogin =(e)=>
{
    let message = "Please fill the form"
    if(!this.state.login_email || !this.state.login_password)
    {
        this.state.flag = 1
        toast(message);
        return false
    }
    return true;
}

validateSignup =(e)=>
{
    let message = "Please fill the form"
    if(!this.state.signup_email || !this.state.signup_password || !this.state.signup_firstname || !this.state.signup_lastname)
    {
    toast(message);
    return false
    }
    return true;
}


  login = (e) =>  {
    e.preventDefault();
    const valid = this.validateLogin();
    if(valid)
    {

        let fields = {email:this.state.login_email,
            password:this.state.login_password};
        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fields)
        };

        fetch('https://backend-newz.herokuapp.com/api/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status === 200){
                    localStorage.setItem('loggedData', JSON.stringify(data.data));
                    // console.log(localStorage.getItem('loggedData'));
                    toast("Welcome "+ JSON.parse(localStorage.getItem('loggedData'))[0].first_name)            
                    this.setState({
                        
                        redirect_home : true
                      });
                      
                }else{
                    toast(data.message);
                }
              
            });  
            // console.log(this.state.fields.emailid);
            // console.log(this.state.fields.password);
    }
}

signup = (e) =>  {
  e.preventDefault();
  const valid = this.validateSignup();
    if(valid)
    {
      let fields = {firstName:this.state.signup_firstname,
                    lastName:this.state.signup_lastname,
                    emailId:this.state.signup_email,
                    password:this.state.signup_password};      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields)
      };

      fetch('https://backend-newz.herokuapp.com/api/user/signup', requestOptions)
          .then(response => response.json())
          .then(data => {
              if(data.status === 200){
                
                  localStorage.setItem('loggedData', JSON.stringify(data.data)); 
                  toast("You are sucessfully signup "+ JSON.parse(localStorage.getItem('loggedData'))[0].first_name)             
                  this.setState({
                      redirect_category : true
                    });
              }else{
                toast(data.message);
              }
            
          }); 
        }
}

render() {

    if (this.state.login) {
        return <Redirect to='/home' />
      }
      else if (this.state.redirect_category) {
        return <Redirect to='/category' />
      }
      else if (this.state.redirect_home) {
        return <Redirect to='/home' />
      }
      else
        return (

           

<div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>                 
                    <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                    <label for="reg-log"></label>
                    <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                            <div class="card-front">
                                <div class="center-wrap">
                                    <form onSubmit={this.login} >
                                        <div class="section text-center">
                                            <h4 class="mb-4 pb-3">Log In</h4>
                                            <div class="form-group">
                                                    <input type="email" name="login_email" class="form-style" 
                                                    placeholder="Your Email" id="logemail" autocomplete="off" value={this.state.login_email} onChange={this.handleChange}/>
                                                <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faAt} /></i>
                                            </div>
                                            <div class="form-group mt-2">
                                                <input type="password" name="login_password" class="form-style"
                                                    placeholder="Your Password" id="logpass" autocomplete="off" value={this.state.login_password} onChange={this.handleChange}/>
                                                   <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faLock} /></i>
                                            </div>

                                            <button type="submit" className="btn mt-4" >Submit</button>
                                                                                               
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card-back">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                    <form onSubmit={this.signup}>
                                        <h4 class="mb-4 pb-3">Sign Up</h4>
                                        <div class="form-group">
                                            <input type="text" name="signup_firstname" class="form-style"
                                                placeholder="Your First Name" id="logname" autocomplete="off" value={this.state.signup_firstname} onChange={this.handleChange}/>
                                             <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faUser} /></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="text" name="signup_lastname" class="form-style"
                                                placeholder="Your Last Name" id="logname" autocomplete="off" value={this.state.signup_lastname} onChange={this.handleChange}/>
                                                <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faUser} /></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="email" name="signup_email" class="form-style"
                                                placeholder="Your Email" id="logemail" autocomplete="off" value={this.state.signup_email} onChange={this.handleChange}/>
                                              <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faAt} /></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="password" name="signup_password" class="form-style"
                                                placeholder="Your Password" id="logpass" autocomplete="off" value={this.state.signup_password} onChange={this.handleChange}/>
                                               <i class="input-icon uil uil-at"><FontAwesomeIcon icon={faLock} /></i>
                                        </div>
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
</div>
  );
}
}

