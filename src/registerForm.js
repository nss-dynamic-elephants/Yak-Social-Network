import React, { Component } from 'react';
import './styles/register.css';

// Wrap entire registration form in a function
class Register extends Component {
  state = {
    email: "",
    fName: "",
    lName: "",
    location: "",
    password: ""
};


  handleFirstNameChange(event) {
    this.setState({fName: event.target.value})
  }

  handleLastNameChange(event) {
    this.setState({lName: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }


  componentDidMount () {
    fetch("http://localhost:8080/users?email")
        .then(response => response.json())
        .then(users => this.setState(users))
  }

  componentDidMount () {
    fetch("http://localhost:8080/users?email")
        .then(response => response.json())
        .then(users => this.setState(users))
  }

  validateRegisterForm = (evt) => {
    evt.preventDefault()
    if (this.state.email.length > 0) {
                const userItem = users[0]
                sessionStorage.setItem("ActiveUser", JSON.stringify({ userItem }))
            }

        }

  render() {
    return (
      <div>
          <div className="registerForm">
          <form onSubmit={this.validateRegisterForm}>
            <h2>Register</h2>
            <input className="fNameInput" type="text" placeholder="first name" name="fName" value={this.state.fName} onChange={this.handleFirstNameChange.bind(this)}/>
            <input className="lNameInput" type="text" placeholder="last name" name="lName" value={this.state.lName} onChange={this.handleLastNameChange.bind(this)}/>
            <input className="emailInput" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
            <input className="locationInput" type="text" placeholder="location" name="location" value={this.state.location} onChange={this.handleLocationChange.bind(this)}/>
            <input className="passwordInput" type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            <input type="submit" value="Submit" />

          </form>
          </div>
      </div>
    );
  }
}


export default Register;