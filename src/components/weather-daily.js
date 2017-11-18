import React from 'react';
import Skycon from 'react-animated-weather';
import { toCelsius, setUpperCase, getRightDay } from '../containers/weather';

export default (props) => {
  return(
    <div className="table-daily-div">
      <table className="table-daily ">
        <tbody>
          {props.data.map((data) => {
            // // get the right day
            // const unixTime = (data.time) * 1000;
            // const convertedTime = new Date(unixTime);
            // const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // getDay() return value as number (0-6) and we started from Sunday because in JavaScript, the first day of the week (0) means "Sunday"
            // const convertedTimeDay = days[convertedTime.getDay()];

            // convert icon string to upper case and replace all"-" to "_" to match the Skycons property "icon"
            const icon = setUpperCase(data.icon);

            return(
              <tr key={data.time}>
               <td className="table-daily-td ">{getRightDay(data)}</td>
               <td className="table-daily-td "><Skycon icon={icon} color='white' size={37} animate={true} /></td>
               <td className="table-daily-td ">{toCelsius(data.temperatureMax)}°C</td>
               <td className="table-daily-td minTempDaily ">{toCelsius(data.temperatureMin)}°C</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
