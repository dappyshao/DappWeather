import React from 'react';
import {VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryScatter} from "victory";

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
          label="km / h"
          style={{
            axis: {stroke: "#ffffff"},
            axisLabel: {fill: "#ffffff", fontSize: 13.5, padding: 38},
            tickLabels: {fontSize: 13, fill :"#ffffff"},
            ticks: {stroke: "#ffffff", size: 5},
          }}
        />
        <VictoryLine
          style = {{
            data: {stroke: "#ffffff", strokeWidth: 2},
            labels: {fill: "#ffffff", fontSize: 13.5}
          }}
          data={props.data}
          labels={(data) => data.windSpeed}
          x="time"
          y={props.y}
          animate ={{
            duration: 500
          }}
        />
        <VictoryScatter
          data={props.data}
          size={2}
          style={{ data: { fill: "#e6e6e6"} }}
          x="time"
          y={props.y}
        />
      </VictoryChart>
    </div>
  );
}
