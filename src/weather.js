import React, { Component } from 'react';
import { _getData } from './repo';
import WeatherContainerUI from './components/weather-ui';

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
    const latitude = 10.746903;
    const longitude = 106.676292;

    const params = {
      location: {
        latitude: 10.746903,
        longitude: 106.676292
      }
    };

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
      />
    );
  }
}

export default WeatherUI;