import React, { Component } from 'react';
import Ads from './Ads';


class Adlist extends Component {
    constructor (props) {
        super(props)
        this.uniqueKey = 1
    }

    state = {
        adList: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/ads")
            .then(r => r.json())
            .then(ads => {
                    this.setState({
                        adList: ads
                    })
            })
    }
    render() {
    return (
        <div className="adList">
                {this.state.adList.map(ad => (
                    <Ads company={ad.company}
                             title={ad.title}
                             content= {ad.content}
                             key={this.uniqueKey++} />
                ))}
        </div>
    )
  }
}

export default Adlist;