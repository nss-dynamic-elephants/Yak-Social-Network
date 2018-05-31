import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Logout</Link>
                <Link to="/">Notifications</Link>
                <input type="text" id="search" placeholder="Search" />
            </nav>
        );
    }
}

export default NavBar;