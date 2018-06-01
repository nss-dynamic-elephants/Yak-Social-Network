import React, { Component } from 'react';

class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    validateForm = (evt) => {
        evt.preventDefault()
        if (this.state.email.length > 0) {
            return fetch(`http://localhost:8080/users?email=${this.state.email}&${this.state.password}`)
                .then((response) => {
                    return response.json();
                }).then((user) => {
                    console.log(user[0])
                    const userItem = user[0]
                    sessionStorage.setItem("ActiveUser", JSON.stringify({ userItem }))
                })
        }
    }

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.validateForm}>
                    <input type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.handleEmailChange} />
                    <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}



export default Login