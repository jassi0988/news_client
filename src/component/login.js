import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

export default class Home extends Component{
    constructor(props)
    {
        super(props)
        const data = localStorage.getItem('loggedData')
        let login = true 
        if(data === null)
        {
            login = false 
        }
        this.state = {
            login
        }
    }


render(){
    if(this.state.login === false)
    {
        return <Redirect to='/' />
    }
    return (
      <div>
          <h1> StAtUS : LogIn </h1>
          
      </div>
    )
  }
}

