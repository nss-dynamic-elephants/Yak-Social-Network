import React, { Component } from 'react';

class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("Submit button for event form clicked")
    }

    render() {
        return (
            <div className="eventForm form"> 
                <form>
                
                    <input className="eventInput" type="text" placeholder="Event Name" name="event" value={this.state.event} onChange={this.handleChange.bind(this)}/>

                    <input className="eventInput" type="date" placeholder="Date" name="date" value={this.state.name} onChange={this.handleChange.bind(this)}/>

                    <input className="eventInput" type="text" placeholder="Location" name="location" value={this.state.location} onChange={this.handleChange.bind(this)}/>

                    <input className="eventInput" type="time" placeholder="Start Time" name="start" value={this.state.start} onChange={this.handleChange.bind(this)}/>

                    <input className="eventInput" type="time" placeholder="End Time" name="end" value={this.state.end} onChange={this.handleChange.bind(this)}/>
                </form>
                <button onSubmit={this.handleSubmit}>Add to Calendar</button>
            </div>
        )
    }

}