import React from 'react';
import './Button.css';

const Button = ({ message, type, callback = event => {} }) => {
  return (
    <div className="space">
      <button
        onClick={event => callback(event)}
        onMouseDown={event => event.preventDefault()}
        className="large charcoal button"
        type={type}
      >
        {message}
      </button>
    </div>
  );
};

export default Button;
