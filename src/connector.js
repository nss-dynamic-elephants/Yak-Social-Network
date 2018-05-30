import React, { Component } from 'react';

class Connector extends Component {
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

    // Update JSX to use state properties
    render() {
      return (
        <div className="mainBody">
            <Register register={this.state.users}/>
        </div>
    );
  }
}

export default Connector;