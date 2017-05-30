import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scriptTag from '../container/container-script-tag';

class GoogleMap extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // let self = this;
    // const POSITION = {
    //   lat: 10.8230989,
    //   lng: 106.6296638
    // };
    // this.loadScriptTag ('https://maps.googleapis.com/maps/api/js?key=AIzaSyD9ygKXg2nqxTk9SIbFzPFN7C-yQ9U9_nw', () => {
    //   self.map = new google.maps.Map(self.refs.map, { center: POSITION,  zoom: 16 });
    // });
  }

  loadScriptTag(url, callback) {
     // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    // script.async = true;
    // script.defer = true;
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
  }

  render() {
    const mapStyles = {
      width: 500,
      height: 500,
      border: '1px solid #000'
    };
    console.log('MAP', this.props)
    return (
      // <div style={mapStyles} ref="map"></div>
      <div style={mapStyles} ref={this.props.mapRef}></div>
    );
  }
}

export default GoogleMap;