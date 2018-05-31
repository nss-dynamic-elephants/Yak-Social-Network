import React, { Component } from 'react';
import App from './App.js';
import Modal from 'react-responsive-modal';
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

  render() {
    const { open } = this.state;
    return (
      <div className="modal-overlay modal">
        <h4>Centered modal</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Register
        </button>{' '}

        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    );
  }
}
        // // Button click opens the register form
        // $("#registerID").on("click", function (event) {
        //     console.log(event.currentTarget.id)
        //     // Ensure the page is cleared
        //     $("#holder").hide()
        //     $("#headerID").empty()

        // }


//             // Create login/register form
//             tagbuild("div", "user-section", "", "", "form")
//             tagbuild("input", "form", "", "name", "username")
//             tagbuild("input", "form", "", "email - ex: myname@email.com", "email")
//             tagbuild("button", "form", "Complete Registration", "", "registerButton")

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