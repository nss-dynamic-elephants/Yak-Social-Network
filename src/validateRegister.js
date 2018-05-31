import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class ValidateRegister extends Component {

    handleSubmit = function(event) {
        event.preventDefault()
        console.log("Submit button clicked")
      }

// submit button for the form
// event handler to detect submit button click
// validation of user email against the db

//loop through users
//validate current user
//if no, then add user and log in
//if yes, then log in user (alert them)
            // if(this.email === )



componentDidMount () {
    fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(users => this.setState(users))
  }



    render() {
        return (
          <div className="validate">
                <button className="submitButton" data-dismiss="modal">Submit</button>
            <p>
                Validate
            </p>
          </div>

      );
    }
  }

  export default ValidateRegister;