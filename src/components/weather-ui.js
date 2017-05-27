import React, { Component } from 'react';
import WeatherHeaderUI from './weather-header-ui';
import WeatherContentUI from './weather-content-ui';

class WeatherContainerUI extends Component {
	render() {
		const props =  this.props;
		return (
			<div>
				<WeatherHeaderUI {...props} />
				<WeatherContentUI {...props} />
			</div>
		);
	}
}

export default WeatherContainerUI;