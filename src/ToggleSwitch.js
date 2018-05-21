import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleAutoplay }) => {
  return (
    <div className="space">
      <label className="switch">
        <input type="checkbox" onClick={() => toggleAutoplay()} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
