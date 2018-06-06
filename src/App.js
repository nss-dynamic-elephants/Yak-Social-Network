import React, { Component } from 'react';
import './App.css';
import Login from './login.js'
import Register from './registerForm';
import Adlist from './Ads/AdList';


class App extends Component {
  state = {
    users:[

    ],
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
            <Register register={this.state.users}/>
        </header>

        <p className="App-intro">
        </p>
        < Login />
        <Adlist />
      </div>
    )
  }
}



export default App;
