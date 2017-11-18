import { GET_LOCATION , GET_FIRST_LOCATION } from '../actions/get-location';


export default function ( state=null, action) {
  switch(action.type) {
    case GET_LOCATION:
      console.log("Action received", action);
      return action.payload.data;
    case GET_FIRST_LOCATION:
      return action.payload.data;
    default:
      return state;
  }
}
