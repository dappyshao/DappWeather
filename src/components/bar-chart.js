import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryLabel} from 'victory';

export default (props) => {
  return (
    <div className="weather-charts">
      <VictoryChart domainPadding={20} height={295}>
        <VictoryLabel
          textAnchor="middle"
          x={225} y={25}
          style={{fontSize: 17, fill: "#ffffff"}}
          text={props.title}
        />
        <VictoryAxis
          style={{
            axis: {stroke: "#ffffff"},
            tickLabels: {fontSize: 13.5, fill :"#ffffff"}
          }}
        />
        <VictoryAxis
          dependentAxis
          label="hPa"
          style={{
            axis: {stroke: "#ffffff"},
            axisLabel: {fill: "#ffffff", fontSize: 13.5, padding: 38 },
            tickLabels: {fontSize: 13, fill :"#ffffff"},
            ticks: {stroke: "#ffffff", size: 5}
          }}
        />
        <VictoryBar
          style={{
            data: {
              fill: "#ffffff",
              fillOpacity: 0.85,
              stroke: "#ffffff",
              strokeWidth: 1,
              width: 20 },
            labels: {fill: "#ffffff", fontSize: 13.5}
          }}
          data={props.data}
          labels={(data) => data.pressure}
          x="time"
          y={props.y}
          animate={{
            duration: 500
          }}
        />
      </VictoryChart>
    </div>
  );
}
