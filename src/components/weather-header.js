import React from 'react';
import Skycon from 'react-animated-weather';
import { toCelsius, setUpperCase } from '../containers/weather';

export default ( props ) => {
  return (
    <div className="header">
     {props.location.address_components.map((obj) => {
       return(
        obj.types.filter(function(el){
          return el === "locality"
        }).map((oxy) => {
          return (
            <h1 key={obj.short_name} className="header-h1">{obj.long_name} </h1>
          );
        })
      );
    })}




      <Skycon icon={setUpperCase(props.currently.icon)} color='white' size={115} animate={true} />
      <h2 className="header-h2">{toCelsius(props.currently.temperature)}°C</h2>
    </div>
  );
}
