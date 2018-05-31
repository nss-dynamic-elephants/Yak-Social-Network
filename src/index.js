import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Login from './login';



// handleNav = function() {
//     if(sessionStorage.length > 0 ){
//         return
//     <div>
//         <NavBar/>
//         <Route exact path="/" component={App} />
//         <Route exact path="#" component={App} />
//         <Route exact path="#" component={App} />
//         <Route exact path="#" component={App} />
//         <Route exact path="#" component={App} />
//     </div>
//     }
// }

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
            <Route exact path="#" component={App} />
            <Route render={(props) => {
                if(sessionStorage.getItem("ActiveUser") === null) {
                    return (<Redirect to={{
                        pathname: '/login',
                      }} />)
                }
                else {
                    return(<div>
                        <NavBar/>
                        {/* <Dashboard /> */}
                    </div>)
                }
            }} />
        </div>
    </Router>
), document.querySelector("#root"))
registerServiceWorker();
