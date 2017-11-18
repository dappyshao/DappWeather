import React from 'react';
import {toCelsius} from '../containers/weather';
import '../styles/weather-icons/css/weather-icons.css';

export default (props) => {
  return (
    <div >
      <p><i className="wi wi-thermometer"></i> Apparent Temperature: {toCelsius(props.data.apparentTemperature)}°C</p>

      <p><i className="wi wi-barometer"></i> Pressure: {Math.round(props.data.pressure)} hPa</p>

      <p><i className="wi wi-cloud"></i> Cloud Cover: {Math.round(props.data.cloudCover * 100)}%</p>

      <p><i className="wi wi-humidity"></i> Humidity: {props.data.humidity * 100}%</p>

      <p><i className="wi wi-rain"></i> Precipitation Probability: {props.data.precipProbability * 100}%</p>

      <p><i className="wi wi-raindrop"></i> Precipitation Intensity: {Math.round(props.data.precipIntensity *25,4)} mm</p>

      <p><i className="wi wi-windy"></i> Wind Speed: {Math.round(props.data.windSpeed * 1.61)} km/h</p>

    </div>
  );
}
