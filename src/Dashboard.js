import React, { Component } from 'react';
import Adlist from './Ads/AdList';

class Dashboard extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
              {/* <Register register={this.state.users}/> */}
          </header>
  
          <p className="App-intro">
          </p>
          <Adlist />
        </div>
      )
    }
  }
  
  
  
  export default Dashboard;
  