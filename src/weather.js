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

  // onHandleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // onHandleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   console.log(event);
  //   this.props.callbackFromParent(this.state.value);
  //   event.preventDefault();
  // }

  getData() {

    const params = {
      location: {
        lat: 10.746903,
        lng: 106.676292
      }
    };

    // const POSITION = {
    //   lat: 10.8230989,
    //   lng: 106.6296638
    // };

    const POSITION = params.location;

    console.log('KKK', params.location);

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

  // loadScriptTag(url, callback) {
  //    // Adding the script tag to the head as suggested before
  //   var head = document.getElementsByTagName('head')[0];
  //   var script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   // script.async = true;
  //   // script.defer = true;
  //   script.src = url;

  //   // Then bind the event to the callback function.
  //   // There are several events for cross browser compatibility.
  //   script.onreadystatechange = callback;
  //   script.onload = callback;

  //   // Fire the loading
  //   head.appendChild(script);
  // }

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