import React, { Component } from 'react';
import WeatherHeader from '../components/weather-header';
import WeatherDaily from '../components/weather-daily';
import WeatherHourly from '../components/weather-hourly';
import WeatherDescription from '../components/weather-description';
import WeatherDetails from '../components/weather-details';
import Charts from '../components/charts';
import ErrorComponent from '../components/error';
import { connect } from 'react-redux';
import ClearDay from '../images/clear-day.jpg';
import ClearNight from '../images/clear-night.jpg';
import CloudyNight from '../images/cloudy-night.jpg';
import Cloudy from '../images/cloudy.jpg';
import Fog from '../images/fog.jpg';
import CloudyDay from '../images/cloudy-day.jpg';
import Rain from '../images/rain.jpg';
import Sleet from '../images/sleet.jpg';
import Snow from '../images/snow.jpg';
import Windy from '../images/windy.jpg';
import Default from '../images/default.jpg'


export function toCelsius(fahrenheit) {
  return Math.round((fahrenheit - 32) * 5 / 9);
}

export function setUpperCase(iconString) {
  return iconString.replace(/-/g, "_").toUpperCase();
}

export function getRightDay(data) {
  const unixTime = (data.time) * 1000;
  const convertedTime = new Date(unixTime);
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // getDay() return value as number (0-6) and we started from Sunday because in JavaScript, the first day of the week (0) means "Sunday"
  const convertedTimeDay = days[convertedTime.getDay()];
  return convertedTimeDay;
}

class Weather extends Component {

  renderWeather() {
    function setBgImg(currentData) {
      switch(currentData.icon) {
        case 'clear-day':
        document.body.style.backgroundImage = `url(${ClearDay})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'clear-night':
        document.body.style.backgroundImage = `url(${ClearNight})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'rain':
        document.body.style.backgroundImage = `url(${Rain})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'snow':
        document.body.style.backgroundImage = `url(${Snow})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'sleet':
        document.body.style.backgroundImage = `url(${Sleet})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'wind':
        document.body.style.backgroundImage = `url(${Windy})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'fog':
        document.body.style.backgroundImage = `url(${Fog})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'cloudy':
        document.body.style.backgroundImage = `url(${Cloudy})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'partly-cloudy-day':
        document.body.style.backgroundImage = `url(${CloudyDay})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        case 'partly-cloudy-night':
        document.body.style.backgroundImage = `url(${CloudyNight})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        break;

        default:
        document.body.style.backgroundImage = `url(${Default})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
      }
    }

    if(this.props.weather && this.props.location) {
      if(this.props.weather.code === 500 || this.props.location.status === "ZERO_RESULTS") {
        console.log("Something went wrong.");
        return(
          <ErrorComponent />
        );
      }  else {
      const cityData = this.props.location.results['0'];
      const currentData = this.props.weather.currently;
      const dailyData = (this.props.weather.daily.data).slice(1,7);
      const hourlyData = (this.props.weather.hourly.data).slice(0,24);
      const descData = this.props.weather.hourly;
      const chartData = dailyData.map(function(obj) {
        return({
          pressure: Math.round(obj.pressure),
          time: getRightDay(obj),
          windSpeed: Math.round(obj.windSpeed * 1.61),
          precipProbability: Math.round(obj.precipProbability*100)
        });
        }
      )

      setBgImg(currentData);

      return (
        <div className="container-fluid">
            <WeatherHeader location={cityData} currently={currentData} />
            <WeatherHourly data={hourlyData}/>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="center-col">
                <div className="description">
                  <WeatherDescription data={descData} />
                </div>
                <div className="weather-details" >
                  <WeatherDetails data={currentData} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <WeatherDaily data={dailyData} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4" >
              <Charts data={chartData}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

  render() {
    return (
      <div>
        {this.renderWeather()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    weather: state.weather,
    location: state.location
  };
}

export default connect(mapStateToProps)(Weather);
