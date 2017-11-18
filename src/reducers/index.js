import { combineReducers } from 'redux';
import LocationReducer from './reducer-location';
import WeatherReducer from './reducer-weather';

const allReducers = combineReducers({
  location: LocationReducer,
  weather: WeatherReducer
});

export default allReducers;
