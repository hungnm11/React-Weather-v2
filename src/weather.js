import React, { Component } from 'react';
import { _getData } from './repo';
import HeaderUI from './components/weather-header-ui';

class WeatherUI extends Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    const params = {
      // access_key: '9af2d5555fd753d5b3fccb3a4c7a3341',
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