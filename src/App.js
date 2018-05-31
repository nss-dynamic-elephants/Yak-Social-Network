import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './registerForm';
import Adlist from './Ads/AdList';

class App extends Component {
  state = {
    users:[],
    friendsList: [],
    chatMessages: [],
    posts: [],
    calendar: []
}


componentDidMount () {
  fetch("http://localhost:8088/users")
      .then(response => response.json())
      .then(users => this.setState(users))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Register register={this.state.users}/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Adlist />
      </div>
    );
  }
}

export default App;
