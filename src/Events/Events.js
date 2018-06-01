import React, { Component } from "react";

class Events extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.event}</h2>
                <p>{this.props.date}</p>
                <p>{this.props.location}</p>
                <p>{this.props.start}</p>
                <p>{this.props.end}</p>
            </article>
        )
    }
}

export default Events