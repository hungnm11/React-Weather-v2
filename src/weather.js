import React, { Component } from 'react';
import { _getData } from './repo';
import HeaderUI from './components/weather-header-ui';
import json from './core/forecast.json';

class WeatherUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const latitude = 10.746903;
    const longitude = 106.676292;

    const params = {
      location: {
        latitude: 10.746903,
        longitude: 106.676292
      }
    };

    // _getData(params).then(data => {
    //   console.log('DATA', data)
    //   this.setState(
    //     Object.assign({}, this.state, { res: data })
    //     );
    // });
  }

  processData() {
    const data = {};

    if (this.state.res) {
      data.data = this.state.res;
    }
    return data;
  }

  render() {
    console.log('STATE', this.state, json);
    const data = this.processData();
    return (
      <HeaderUI {...data} />
    );
  }
}

export default WeatherUI;