import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Landing from './LandingPage';
import Check from './loginCheck'

ReactDOM.render((
    <div>
        <Router>
            <Check />
        </Router>
    </div>
), document.getElementById("root"))
