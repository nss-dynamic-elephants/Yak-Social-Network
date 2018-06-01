import React, { Component } from 'react';
import Login from './login';
import Register from './registerForm';


class Landing extends Component {
    state = {
        users:[],
        friendsList: [],
        chatMessages: [],
        posts: [],
        calendar: []
    }
    
    
    componentDidMount () {
      fetch("http://localhost:8080/users")
          .then(response => response.json())
          .then(users => this.setState(users))
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
          </header>
  
          <p className="App-intro">
          </p>
          <Login />
          <Register register={this.state.users}/>
        </div>
      )
    }
  }
  
  
  
  export default Landing;