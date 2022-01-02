import React from 'react';
import './Chart.css';
import Chartbar from './Chartbar';
const Chart = (props) => {
    const Datavalue = props.dataPoints.map(dataPoint => dataPoint.value);
    const total =Math.max(...Datavalue);




  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
