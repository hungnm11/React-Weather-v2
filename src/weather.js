import React, { Component } from 'react';
import { _getData } from './repo';
import WeatherContainerUI from './components/weather-ui';
import * as scriptTag from './container/container-script-tag';

class WeatherUI extends Component {
  constructor(props) {
    super(props);
    this.onClickInput = this.onClickInput.bind(this);
    this.myCallback = this.myCallback.bind(this);

    this.state = {
      loading: false,
      listDataFromChild: null
    };
  }

  componentDidMount() {

    const params = {
      location: {
        lat: 10.746903,
        lng: 106.676292
      }
    };

    const POSITION = params.location;

    scriptTag.loadScriptTag ('https://maps.googleapis.com/maps/api/js?key=AIzaSyD9ygKXg2nqxTk9SIbFzPFN7C-yQ9U9_nw&libraries=places', () => {
      let map = this.map;
      map = new google.maps.Map(this.mapElement, { center: POSITION,  zoom: 10 });

      const autocomplete = new google.maps.places.Autocomplete(this.inputElement);
      autocomplete.bindTo('bounds', map);

      // map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.inputElement);

      const infowindow = new google.maps.InfoWindow();
      const marker = new google.maps.Marker({
        map: map
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });

    // Get the full place details when the user selects a place from the
    // list of suggestions.
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        infowindow.close();
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }
        console.log('place.geometry.location ===========', place.geometry.location)
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        // Set the position of the marker using the place ID and location.
        marker.setPlace(/** @type {!google.maps.Place} */ ({
          placeId: place.place_id,
          location: place.geometry.location
        }));
        marker.setVisible(true);

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address + '</div>');
        infowindow.open(map, marker);
      });
    });

    this.getData(params);
  }

  onClickInput(e) {
    console.log('INPUT', e.target.value);
  }

  myCallback(dataFromChild) {
    console.log('dataFromChild', dataFromChild);
    this.setState({ listDataFromChild: dataFromChild });
  }

  getData(params) {
    _getData(params).then(data => {
      console.log('DATA', data)
      this.setState(
        Object.assign({}, this.state, { res: data })
        );
    });
  }
 
  processData() {
    const data = {};

    if (this.state.res) {
      data.data = this.state.res;
      data.loading = true;
      data.listDataFromChild = this.state.listDataFromChild;
    }
    return data;
  }

  getLocationMap() {
    
  }

  render() {
    console.log('STATE', this.state);
    const data = this.processData();
    this.getLocationMap();
    console.log('REF', this.inputElement);
    return (
      <WeatherContainerUI 
        {...data}
        onClickInput={this.onClickInput}
        callbackFromParent={this.myCallback}
        onHandleChange={this.onHandleChange}
        onHandleSubmit={this.onHandleSubmit}
        mapRef={(el) => this.mapElement = el}
        inputRef={(el) => this.inputElement = el}
      />
    );
  }
}

export default WeatherUI;