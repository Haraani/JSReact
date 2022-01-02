import React from 'react';
import './Chartbar.css';

const Chartbar = (props) => {
  let filler = '0%';

  if (props.maxValue > 0) {
    filler = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: filler }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
