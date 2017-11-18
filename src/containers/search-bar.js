import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getLocation, getFirstLocation } from '../actions/get-location';
import { fetchWeather } from '../actions/fetch_weather';
import 'font-awesome/css/font-awesome.min.css';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.geolocationSuccess = this.geolocationSuccess.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.getLocation(this.state.term)
      .then(() => {
        if(this.props.location.status === "ZERO_RESULTS"){
          console.log("Something went wrong.")
        } else {
        const lat = this.props.location.results["0"].geometry.location.lat;
        const lng = this.props.location.results["0"].geometry.location.lng;
      this.props.fetchWeather(lat,lng);
      }
    });

    this.setState({term:""});
  }

  getMyLocation() {
    if ( navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geolocationSuccess);
    }
  }

  geolocationSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    this.props.getFirstLocation(lat,lng);
    this.props.fetchWeather(lat,lng);
}

  componentWillMount() {
    this.getMyLocation();
  }

  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>

          <span className="input-group-addon primary">
          <Tooltip
          title="To be sure that we have found the right city please, be as specific as possible. For example: Zbiersk, wielkopolska, Polska."
          position="bottom"
          animation="scale"
          arrow="true">
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </Tooltip>
          </span>

          <input
            type="text"
            placeholder="Please enter city name"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getLocation,getFirstLocation, fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
