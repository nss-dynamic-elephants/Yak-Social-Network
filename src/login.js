import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }
    validateForm= function (evt) {
        evt.preventDefault() 
        if (this.state.email.length > 0) {
            return fetch ("http://localhost:8088/users")
            .then(
                user => {
                    console.log(user)
                // user.forEach(currentUser => {
                    
                    // if (currentUser.email === this.state.email) {
                    //     sessionStorage.setItem("ActiveUser", JSON.stringify({user}))
                    // }
                // })
            }
            )
        }
    }.bind(this)

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    render() {
        return (
            <div>
                <form onSubmit={this.validateForm}>
                <input type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.handleFormFieldChange} />
                <input type="submit" />
                </form>
            </div>
        )
    }
}


export default Login