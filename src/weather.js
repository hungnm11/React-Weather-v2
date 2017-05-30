import React, { Component } from 'react';
import { _getData } from './repo';
import WeatherContainerUI from './components/weather-ui';
import * as scriptTag from './container/container-script-tag';

class WeatherUI extends Component {
  constructor(props) {
    super(props);
    this.onClickInput = this.onClickInput.bind(this);
    this.myCallback = this.myCallback.bind(this);
    // this.onHandleChange = this.onHandleChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);

    this.state = {
      loading: false,
      listDataFromChild: null
    };
  }

  componentDidMount() {
    
    this.getData();
  }

  onClickInput(e) {
    console.log('INPUT', e.target.value);
  }

  myCallback(dataFromChild) {
    console.log('dataFromChild', dataFromChild);
    this.setState({ listDataFromChild: dataFromChild });
  }

  getData() {

    const params = {
      location: {
        lat: 10.746903,
        lng: 106.676292
      }
    };

    const POSITION = params.location;

    scriptTag.loadScriptTag ('https://maps.googleapis.com/maps/api/js?key=AIzaSyD9ygKXg2nqxTk9SIbFzPFN7C-yQ9U9_nw', () => {
      self.map = new google.maps.Map(this.mapElement, { center: POSITION,  zoom: 10 });
    });

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

  render() {
    console.log('STATE', this.state);
    const data = this.processData();

    return (
      <WeatherContainerUI 
        {...data}
        onClickInput={this.onClickInput}
        callbackFromParent={this.myCallback}
        onHandleChange={this.onHandleChange}
        onHandleSubmit={this.onHandleSubmit}
        mapRef= {(el) => this.mapElement = el}
      />
    );
  }
}

export default WeatherUI;