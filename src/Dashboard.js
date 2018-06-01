import React, { Component } from 'react';
import Adlist from './Ads/AdList';



class Dashboard extends Component {

  state = {
    "id": "",
    "fName": "",
    "lName": "",
    "email": "",
    "location": "",
    "password": ""
  }
  
  userInfo = () => this.setState(sessionStorage.getItem("ActiveUser"))

    render() {
      return (
        <div className="App">
          <header className="App-header">
              {this.state.fName}
          </header>
  
          <p className="App-intro">
          </p>
          <Adlist />
        </div>
      )
    }
  }
  
  
  
  export default Dashboard;
  