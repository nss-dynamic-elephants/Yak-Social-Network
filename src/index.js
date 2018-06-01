import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Dashboard from './Dashboard';
import Landing from './LandingPage';


ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/LandingPage" component={Landing} />
            <Route exact path="#" component={Dashboard} />
            <Route exact path="#" component={Dashboard} />
            <Route exact path="#" component={Dashboard} />
            <Route path="/Dashboard" render={(props) => {
                if(sessionStorage.getItem("ActiveUser") === null) {
                    return (<Redirect to={{
                        pathname: '/LandingPage' ,
                      }} />)
                }
                else {
                    return(<div>
                        <NavBar/>
                        <Dashboard />
                    </div>)
                }
            }} />
            {/* <Route path="/LandingPage" render={(props) => {
                if(sessionStorage.getItem("ActiveUser") !== null) {
                    return (<Redirect to={{
                        pathname: '/Dashboard' ,
                      }} />)
                }
            }} /> */}
        </div>
    </Router>
), document.querySelector("#root"))
registerServiceWorker();
