import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class ValidateRegister extends Component {

    handleSubmit = function(event) {
        event.preventDefault()
      }

    render() {
        return (
          <div className="validate">
                <button onClick={this.handleSubmit} className="submitButton">Submit</button>
            <p>
                Validate
            </p>
          </div>

      );
    }
  }

  export default ValidateRegister;