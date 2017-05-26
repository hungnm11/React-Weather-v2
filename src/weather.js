import React, { Component } from 'react';
import { _getData } from './repo';
import HeaderUI from './components/weather-header-ui';

class WeatherUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  processData() {
    const data = {};

    if (this.state.res) {
      data.data = this.state.res;
    }
    return data;
  }

  render() {
    console.log('STATE', this.state);
    const data = this.processData();
    return (
      <HeaderUI {...data} />
    );
  }
}

export default WeatherUI;