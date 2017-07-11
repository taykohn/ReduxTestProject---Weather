import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        // create embedded google map within document - integration with third-party library
        // second parameter is option object
        debugger;
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    // ref - allows us to get a direct reference to an html element that has been rendered to the page
    // can now refer to this.refs.map
    render() {
        return <div ref="map" />;
    }

}

export default GoogleMap;
