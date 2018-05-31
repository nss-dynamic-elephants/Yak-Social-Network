import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './styles/register.css';

// Wrap entire registration form in a function
class Register extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    console.log("button clicked")
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
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
            <h2>Register</h2>
            <input className="usernameInput" type="text" placeholder="enter your name" name="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
            <input className="emailInput" type="text" placeholder="enter your email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          <button className="submitButton">Submit</button>
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