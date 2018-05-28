import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleAutoplay, autoplayEnabled }) => {
  return (
    <div className="flex-container-row">
      <label className="switch">
        <input type="checkbox" onClick={() => toggleAutoplay()} />
        <span className="slider round" />
      </label>
      <p className="autoplay-status">{`${
        autoplayEnabled ? `Disable` : `Enable`
      } Autoplay`}</p>
    </div>
  );
};

export default ToggleSwitch;
