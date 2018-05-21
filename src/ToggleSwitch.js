import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleAutoplay, autoplayEnabled }) => {
  return (
    <div className="space">
      <p>{`${autoplayEnabled ? `Disable` : `Enable`} Autoplay`}</p>
      <label className="switch">
        <input type="checkbox" onClick={() => toggleAutoplay()} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
