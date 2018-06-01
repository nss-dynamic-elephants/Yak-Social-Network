import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ValidateRegister from './validateRegister';
import './styles/register.css';

// Wrap entire registration form in a function
class Register extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
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

  render() {
    const { open } = this.state;
    return (
      <div className="modal-overlay modal">
        <button type="button" className="btn btn-action" onClick={this.onOpenModal}>
          Register
        </button>

        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="registerForm">
          <form>
            <h2>Register</h2>
            <input className="fNameInput" type="text" placeholder="first name" name="fName" value={this.state.fName} onChange={this.handleFirstNameChange.bind(this)}/>
            <input className="lNameInput" type="text" placeholder="last name" name="lName" value={this.state.lName} onChange={this.handleLastNameChange.bind(this)}/>
            <input className="emailInput" type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
            <input className="locationInput" type="text" placeholder="location" name="location" value={this.state.location} onChange={this.handleLocationChange.bind(this)}/>
            <input className="passwordInput" type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>


            <ValidateRegister onCloseModal = {this.onCloseModal}/>
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}

//             $("#registerButton").on("click", function (event) {
//                 const adduser = require("./adduser")
//                 console.log(event.currentTarget.id)
//                 let username = $("#username").val()
//                 let email = $("#email").val()

//                 console.log(username, email)
//                 if (username === "" || email === "") {
//                     alert("Please fill all fields...!!!!!!");
//                 }else {
//                     addUser(username,email)
//                     loggedin(username)
//                 }
//             }) // Closes register button event listener


//         }) // Closes button on click event listener
//     }) //Closes document ready
// } // Closes registerForm function

export default Register;