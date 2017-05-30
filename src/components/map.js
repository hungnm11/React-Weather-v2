import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scriptTag from '../container/container-script-tag';

class GoogleMap extends Component {
  constructor() {
    super();
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