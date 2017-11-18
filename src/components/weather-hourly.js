import React, {Component} from 'react';
import Skycon from 'react-animated-weather';
import { toCelsius, setUpperCase } from '../containers/weather';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        autoHeight
        renderThumbHorizontal={({ style, ...props }) =>
            <div {...props} style={{ ...style, backgroundColor: '#fff', opacity: '0.7', borderRadius: 15 }}/>
        }>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default (props) => {

  return (
    <div className="table-hourly-div">
      <CustomScrollbars>
      <table className="table-hourly">

        <tbody>
          <tr>
            {props.data.map((data) => {
              const unixTime = (data.time) * 1000;
              const convertedTime = new Date(unixTime);
              const convertedTimeHour = convertedTime.getHours();
              return(
                <td className="table-hourly-td" key={data.time}>
                  {convertedTimeHour}
                </td>
              );
            })}
          </tr>
          <tr>
            {props.data.map((data) => {
              const icon = setUpperCase(data.icon);
              return(
                <td className="table-hourly-td" key={data.time}>
                  <Skycon icon={icon} color='white' size={38} animate={true} />
                </td>
              );
            })}
          </tr>
          <tr>
            {props.data.map((data) => {
              return(
                <td className="table-hourly-td" key={data.time}>
                  {toCelsius(data.temperature)}°C
                </td>
              );
            })}
          </tr>
        </tbody>

      </table>
      </CustomScrollbars>
    </div>

  );
}
