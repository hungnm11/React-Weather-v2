import React, { Component } from 'react';
import { _getData } from './repo';
import HeaderUI from './components/weather-header-ui';

class WeatherUI extends Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    const params = {
      latitude: '10.746903,106.676292',
      // longitude: 106.676292
    };

    _getData(params).then(data => {
      this.setState(
        Object.assign({}, this.state, { res: data })
        );
    });
  }

  render() {
    return (
      <HeaderUI />
    );
  }
}

export default WeatherUI;