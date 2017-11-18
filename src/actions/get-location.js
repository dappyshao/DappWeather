import axios from 'axios';

export const GET_LOCATION ="GET_LOCATION";
export const GET_FIRST_LOCATION ="GET_FIRST_LOCATION";

export const getLocation = (city) => {
  const url = `http://localhost:3001/api/location?address=${city}`;

  const request = axios.get(url);

  console.log("request", request);

  return {
    type: GET_LOCATION,
    payload: request
  };
}

export const getFirstLocation = (lat,lng) => {
  const url = `http://localhost:3001/api/locationFirst?lat=${lat}&lng=${lng}`;

  const request = axios.get(url);

  return {
    type: GET_FIRST_LOCATION,
    payload: request
  };
}
