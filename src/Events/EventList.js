import React, { Component } from 'react';
// import Events from './Events';

class EventList extends Component {
    constructor (props) {
        super(props)
        this.uniqueKey = 1
    }
    
    state = {
        eventList: []
    }

    componentDidMount() {
        fetch("heep://localhost: 8080/calendar")
            .then(r => r.json())
            .then(ads => {
                this.setState({
                    eventList: events
                })
            })
    }
    render() {
        return (
            <div className="eventList">
                {this.state.eventList.map(event => (
                    <Events event={calendar.event} date={calendar.date} location={calendar.location} start={calendar.start} end={calendar.end}/>
                ))}
            </div>
        )
    }
}

export default EventList;