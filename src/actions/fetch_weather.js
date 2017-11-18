import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (lat,lng) => {
  const url = `http://localhost:3001/api/weather?lat=${lat}&lng=${lng}`;

  const request = axios.get(url);

  console.log("request", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
