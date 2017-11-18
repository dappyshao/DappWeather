import { FETCH_WEATHER } from '../actions/fetch_weather';

export default function ( state=null, action) {
  switch(action.type) {
    case FETCH_WEATHER:
      console.log("Action received", action);
       return action.payload.data;
    default:
       return state;
    }
  }
