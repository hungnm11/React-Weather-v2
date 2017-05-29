import React, { Component } from 'react';
import WeatherHeaderUI from './weather-header-ui';
import WeatherContentUI from './weather-content-ui';
import WeatherGoogleMap from './map';

class WeatherContainerUI extends Component {
	render() {
		const props =  this.props;
		return (
			<div>
				<WeatherHeaderUI {...props} />
				<WeatherContentUI {...props} />
				<WeatherGoogleMap />
			</div>
		);
	}
}

export default WeatherContainerUI;