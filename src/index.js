import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./navbar/navbar";



ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={App} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
        </div>
    </Router>
), document.querySelector("#root"))
registerServiceWorker();
