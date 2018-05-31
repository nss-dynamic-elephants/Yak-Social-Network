import React, { Component } from 'react';
import './App.css';
import Register from './registerForm';

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
        </header>
      </div>
    );
  }
}

export default App;
