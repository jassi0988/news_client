import '../category.css';
import {Redirect} from 'react-router-dom';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];



export default class category extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: [],
          value: [],
          selectedId : [],
          selectedcat : [],
          login: true,
          userDetails : JSON.parse(localStorage.getItem('loggedData'))
        };
        const data = localStorage.getItem('loggedData')
        
        if(data === null)
        {
            this.state.login = false 
        }
      }

    //fetching list from databse
    componentDidMount() {
        const url = 'https://backend-newz.herokuapp.com/api/user/categories'
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                userData: result
              });
            },
          ) 
          
      }

    sendData = (e) =>  {
        let userDetails = JSON.parse(localStorage.getItem('loggedData'));
        // e.preventDefault();
        // console.log('Values: '+this.state.selectedId)
        let insertData = {categories : this.state.selectedId,
                        user_id : userDetails[0].id}
          const url = 'https://backend-newz.herokuapp.com/api/user/selectCat'
          fetch(url,{
            method: 'POST',
            body: JSON.stringify(insertData),
            headers: {
                'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
            .then(
              (result) => {
                localStorage.setItem('loggedData', JSON.stringify(result.data));
                this.setState({
                  redirect: true ,                
                });
              // toast(result.message);           
              },
            )

    }

    onChange = (event) => {       
        this.setState({
            value: [ ...event.target.value ]        
        });  
        this.setState({
            selectedId: [ ...event.target.value.map((opt) =>(opt.id)) ] 
        });        
    }

    render() 
    {
    if(!this.state.login)
    {
        return <Redirect to='/Login' />
    }
    if(this.state.redirect || this.state.userDetails[0].categories!=null)
    {     
        return <Redirect to='/home' />     
    }
    else if(this.state.login)
    {
        return ( 
            <span >
                <form onSubmit={this.sendData}>
                    <div className="example-wrapper">
                        <div class="category">
                            <div class="multi-head">Welcome {this.state.userDetails[0].first_name}</div>
                            <div class="multi-head">Please select your fav Categories:</div>
                            <MultiSelect
                                data={this.state.userData.map((opt,key) =>(
                                    opt                             
                                  ))}
                                onChange={this.onChange}
                                textField="name"
                                dataItemKey="id"
                                // onChange={this.call(this.key)}
                                value={this.state.value}                                               
                            />
                        </div>
                        <button>Submit</button>
                    </div>
                </form>
                </span>
            ); 
    }
    
}
}