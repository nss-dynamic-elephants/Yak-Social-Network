import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Dashboard from './Dashboard';
import Landing from './LandingPage';

class Check extends Component {

    render () {
        if(sessionStorage.getItem("ActiveUser") === null) {
            return (<Route exact path="#" component={Landing} />)
        }
        else {
            return (
            <div>
                <Route exact path="/LandingPage" component={Landing} />
                <Route exact path="#" component={Dashboard} />
                <Route exact path="#" component={Dashboard} />
                <Route exact path="#" component={Dashboard} />
            </div>
            )
    }
}
}

export default Check