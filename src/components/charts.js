import React, { Component } from 'react';
import BarChart from './bar-chart';
import LineChart from './line-chart';
import AreaChart from './area-chart';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state={ selectedButton : "pressure"};
    this.setPressure = this.setPressure.bind(this);
    this.setWind = this.setWind.bind(this);
    this.setPrecip = this.setPrecip.bind(this);
  }

  setPressure(event) {
    this.setState({selectedButton: "pressure"})
  }

  setWind(event) {
    this.setState({selectedButton: "windSpeed"})
  }

  setPrecip(event) {
    this.setState({selectedButton: "precipProbability"})
  }

  renderChart() {
    if(this.state.selectedButton === "pressure"){
      return (
         <BarChart data={this.props.data} y="pressure" title="Pressure"/>
      );
    } else if (this.state.selectedButton === "windSpeed") {
      return (
          <LineChart data={this.props.data} y="windSpeed" title="Wind Speed"/>
      );
    } else if (this.state.selectedButton === "precipProbability") {
      return (
          <AreaChart data={this.props.data} y="precipProbability" title="Precipitation Probability"/>
      );
    }
  }

  render() {
    return(
      <div className="weather-charts-buttons">
        <button type="button" onClick={this.setPressure} className="btn btn-secondary button-chart"> Pressure </button>
        <button type="button" onClick={this.setWind} className="btn btn-secondary button-chart"> Wind </button>
        <button type="button" onClick={this.setPrecip} className="btn btn-secondary button-chart"> Precipitation </button>
        <div>
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

export default Charts;
