
import React, { Component } from "react"



class Ads extends Component {
    render() {
        return (
            <article>
                <h2>{ this.props.title}</h2>
                <p>{this.props.content}</p>
                <p> - {this.props.company}</p>
            </article>
        )
    }
}

export default Ads